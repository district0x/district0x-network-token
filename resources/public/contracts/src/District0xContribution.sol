pragma solidity ^0.4.11;

/*
    Copyright 2017, Matus Lestan (district0x)

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

import "./SafeMath.sol";
import "./District0xNetworkToken.sol";
import "./Shareable.sol";
import "./Pausable.sol";
import "./interface/TokenController.sol";

contract District0xContribution is Shareable, Pausable, TokenController {
    using SafeMath for uint;

    District0xNetworkToken public district0xNetworkToken;
    address public wallet;                                              // Wallet that receives all sale funds
    address public founder1;                                            // Wallet of founder 1
    address public founder2;                                            // Wallet of founder 2
    address public earlySponsor;                                        // Wallet of early sponsor
    address[] public advisers;                                          // 4 Wallets of advisors

    uint public constant FOUNDER1_STAKE = 120000000000000000000000000;              // 120M DNT
    uint public constant FOUNDER2_STAKE = 80000000000000000000000000;               // 80M  DNT
    uint public constant EARLY_CONTRIBUTOR_STAKE = 5000000000000000000000000;       // 5M   DNT
    uint public constant ADVISER_STAKE = 5000000000000000000000000;                 // 5M   DNT
    uint public constant LEGAL_ADVISER_STAKE = 2000000000000000000000000;           // 2M   DNT
    uint public constant COMMUNITY_ADVISERS_STAKE = 3000000000000000000000000;      // 3M   DNT
    uint public constant CONTRIB_PERIOD1_STAKE = 600000000000000000000000000;       // 600M DNT
    uint public constant CONTRIB_PERIOD2_STAKE = 140000000000000000000000000;       // 140M DNT
    uint public constant CONTRIB_PERIOD3_STAKE = 40000000000000000000000000;        // 40M  DNT

    uint8 public constant CONTRIB_PERIODS = 3;                          // Number of Contribution Periods

    uint public minContribAmount = 100000000000000000;                  // 0.01 ether

    uint public constant TEAM_VESTING_CLIFF = 24 weeks;                 // 6 months vesting cliff for founders and advisors, except community advisors
    uint public constant TEAM_VESTING_PERIOD = 96 weeks;                // 2 years vesting period for founders and advisors, except community advisors
    
    uint public constant EARLY_CONTRIBUTOR_VESTING_CLIFF = 12 weeks;    // 3 months vesting cliff for early sponsor
    uint public constant EARLY_CONTRIBUTOR_VESTING_PERIOD = 24 weeks;   // 6 months vesting cliff for early sponsor

    bool public tokenTransfersEnabled = false;                          // DNT token transfers will be enabled manually
                                                                        // after first contribution period
                                                                        // Can't be disabled back

    struct Contributor {
        uint amount;                        // Amount of ETH contributed by an addrress in given contribution period
        bool isCompensated;                 // Whether this contributor received DNT token for ETH contribution
        uint amountCompensated;             // Amount of DNT received. Not really needed to store,
                                            // but stored for accounting and security purposes
    }

    struct ContribPeriod {
        uint softCapAmount;                                 // Soft cap of contribution period in wei
        uint afterSoftCapDuration;                          // Number of seconds till the end of sale in the moment of reaching soft cap (unless reaching hardcap)
        uint hardCapAmount;                                 // When reached this amount of wei, the contribution will end instantly
        uint startTime;                                     // Start time of contribution period in UNIX time
        uint endTime;                                       // End time of contribution period in UNIX time
        bool isEnabled;                                     // If contribution period was enabled by multisignature
        bool isCancelled;                                   // If contribution period was cancelled (only possible for 2. or 3. period)
        bool softCapReached;                                // If soft cap was reached
        bool hardCapReached;                                // If hard cap was reached
        uint totalContributed;                              // Total amount of ETH contributed in given period
        address[] contributorsKeys;                         // Addresses of all contributors in given contribution period
        mapping (address => Contributor) contributors;
    }

    ContribPeriod[] public contribPeriods;
    uint[] public contribPeriodsStakes;

    event onContribution(uint indexed contribPeriodIndex, uint totalContributed, address indexed contributor, uint amount,
        uint contributorsCount);
    event onSoftCapReached(uint indexed contribPeriodIndex, uint endTime);
    event onHardCapReached(uint indexed contribPeriodIndex, uint endTime);

    function District0xContribution(
        address[] _owners,          // Addresses allowed to run functions in this contract with "onlymanyowners" modifier
        uint _required,             // Number of signatures required to run function with "onlymanyowners" modifier
        address _wallet,
        address _founder1,
        address _founder2,
        address _earlySponsor,
        address[] _advisers
    )
        Shareable(_owners, _required)
    {
        require(_advisers.length == 4);
        wallet = _wallet;
        founder1 = _founder1;
        founder2 = _founder2;
        earlySponsor = _earlySponsor;
        advisers = _advisers;
        contribPeriodsStakes = new uint[](CONTRIB_PERIODS);
        contribPeriodsStakes[0] = CONTRIB_PERIOD1_STAKE;
        contribPeriodsStakes[1] = CONTRIB_PERIOD2_STAKE;
        contribPeriodsStakes[2] = CONTRIB_PERIOD3_STAKE;
    }

    // @notice Returns index of currently running contribution period
    //  If there's none, returns index 3 (non-existing)
    function getRunningContribPeriod() constant returns (uint) {
        for (uint i = 0; i < contribPeriods.length; i++) {
            ContribPeriod contribPeriod = contribPeriods[i];
            if (!contribPeriod.hardCapReached &&
                contribPeriod.isEnabled &&
                contribPeriod.startTime <= now &&
                contribPeriod.endTime >= now) {
                    return i;
                }
        }
        return CONTRIB_PERIODS;
    }

    function contribute()
        payable
        stopInEmergency
    {
        contributeWithAddress(msg.sender);
    }

    // @notice Function to participate in contribution period
    //  Amounts from the same address should be added up
    //  If soft or hard cap is reached, end time should be modified
    //  Funds should be transferred into multisig wallet
    // @param contributor Address that will receive DNT token
    function contributeWithAddress(address contributor)
        payable
        stopInEmergency
    {
        var periodIndex = getRunningContribPeriod();
        require(periodIndex < contribPeriods.length);
        require(msg.value >= minContribAmount);
        if (contribPeriods[periodIndex].contributors[contributor].amount == 0) {
            contribPeriods[periodIndex].contributorsKeys.push(contributor);
        }
        contribPeriods[periodIndex].contributors[contributor].amount =
            contribPeriods[periodIndex].contributors[contributor].amount.add(msg.value);

        var oldTotalContributed = contribPeriods[periodIndex].totalContributed;

        contribPeriods[periodIndex].totalContributed = oldTotalContributed.add(msg.value);

        var newTotalContributed = contribPeriods[periodIndex].totalContributed;

        // Soft cap was reached
        if (newTotalContributed >= contribPeriods[periodIndex].softCapAmount &&
            oldTotalContributed < contribPeriods[periodIndex].softCapAmount)
        {
            contribPeriods[periodIndex].softCapReached = true;
            contribPeriods[periodIndex].endTime = contribPeriods[periodIndex].afterSoftCapDuration.add(now);
            onSoftCapReached(periodIndex, contribPeriods[periodIndex].endTime);
        } else
        // Hard cao was reached
        if (newTotalContributed >= contribPeriods[periodIndex].hardCapAmount &&
                   oldTotalContributed < contribPeriods[periodIndex].hardCapAmount)
        {
            contribPeriods[periodIndex].hardCapReached = true;
            contribPeriods[periodIndex].endTime = now;
            onHardCapReached(periodIndex, contribPeriods[periodIndex].endTime);
        }

        wallet.transfer(msg.value);
        onContribution(periodIndex, newTotalContributed, contributor, msg.value,
            contribPeriods[periodIndex].contributorsKeys.length);
    }

    // @notice This method is called by owner after contribution period ends, to distribute DNT in proportional manner
    //  Each contributor should receive DNT just once even if this method is called multiple times
    //  In case of many contributors must be able to compensate contributors in paginational way, otherwise might
    //  run out of gas if wanted to compensate all on one method call. Therefore parameters offset and limit
    // @param periodIndex Index of contribution period (0-2)
    // @param offset Number of first contributors to skip.
    // @param limit Max number of contributors compensated on this call
    function compensateContributors(uint periodIndex, uint offset, uint limit)
        onlyOwner
    {
        require(contribPeriods[periodIndex].isEnabled);
        require(contribPeriods[periodIndex].endTime < now);

        uint i = offset;
        uint compensatedCount = 0;
        address[] contributorsKeys = contribPeriods[periodIndex].contributorsKeys;
        uint contributorsCount = contributorsKeys.length;

        ContribPeriod contribPeriod = contribPeriods[periodIndex];
        uint ratio = contribPeriodsStakes[periodIndex]
            .mul(1000000000000000000)
            .div(contribPeriods[periodIndex].totalContributed);

        while (i < contributorsCount && compensatedCount < limit) {
            address contributorAddress = contributorsKeys[i];
            if (!contribPeriod.contributors[contributorAddress].isCompensated) {
                var amountContributed = contribPeriod.contributors[contributorAddress].amount;
                contribPeriod.contributors[contributorAddress].isCompensated = true;

                contribPeriod.contributors[contributorAddress].amountCompensated =
                    amountContributed.mul(ratio).div(1000000000000000000);

                district0xNetworkToken.transfer(contributorAddress,
                    contribPeriod.contributors[contributorAddress].amountCompensated);

                compensatedCount++;
            }
            i++;
        }
    }

    // @notice Method for setting up contribution period
    //  Only owner should be able to execute
    //  Setting first contribution period sets up vesting for founders & advisors
    //  Contribution period should still not be enabled after calling this method
    // @param i Contribution period index (0-2)
    // @param softCapAmount Soft Cap in wei
    // @param afterSoftCapDuration Number of seconds till the end of sale in the moment of reaching soft cap (unless reaching hardcap)
    // @param hardCapAmount Hard Cap in wei
    // @param startTime Contribution start time in UNIX time
    // @param endTime Contribution end time in UNIX time
    function setContribPeriod(
        uint8 i,
        uint softCapAmount,
        uint afterSoftCapDuration,
        uint hardCapAmount,
        uint startTime,
        uint endTime
    )
        onlyOwner
    {
        require(i < CONTRIB_PERIODS);
        require(softCapAmount > 0);
        require(hardCapAmount > softCapAmount);
        require(afterSoftCapDuration > 0);
        require(startTime > now);
        require(endTime > startTime);

        if (i == 0) {
            district0xNetworkToken.revokeAllTokenGrants(founder1);
            district0xNetworkToken.revokeAllTokenGrants(founder2);
            district0xNetworkToken.revokeAllTokenGrants(earlySponsor);

            for (uint j = 0; j < advisers.length; j++) {
                district0xNetworkToken.revokeAllTokenGrants(advisers[j]);
            }

            uint64 vestingDate = uint64(startTime.add(TEAM_VESTING_PERIOD));
            uint64 cliffDate = uint64(startTime.add(TEAM_VESTING_CLIFF));
            uint64 earlyContribVestingDate = uint64(startTime.add(EARLY_CONTRIBUTOR_VESTING_PERIOD));
            uint64 earlyContribCliffDate = uint64(startTime.add(EARLY_CONTRIBUTOR_VESTING_CLIFF));
            uint64 startDate = uint64(startTime);

            district0xNetworkToken.grantVestedTokens(founder1, FOUNDER1_STAKE, startDate, cliffDate, vestingDate, true, false);
            district0xNetworkToken.grantVestedTokens(founder2, FOUNDER2_STAKE, startDate, cliffDate, vestingDate, true, false);
            district0xNetworkToken.grantVestedTokens(earlySponsor, EARLY_CONTRIBUTOR_STAKE, startDate, earlyContribCliffDate, earlyContribVestingDate, true, false);
            district0xNetworkToken.grantVestedTokens(advisers[0], ADVISER_STAKE, startDate, cliffDate, vestingDate, true, false);
            district0xNetworkToken.grantVestedTokens(advisers[1], ADVISER_STAKE, startDate, cliffDate, vestingDate, true, false);
            district0xNetworkToken.grantVestedTokens(advisers[2], LEGAL_ADVISER_STAKE, startDate, cliffDate, vestingDate, true, false);

            // Community advisors stake has no vesting, but we set it up this way, so we can revoke it in case of
            // re-setting up contribution period
            district0xNetworkToken.grantVestedTokens(advisers[3], COMMUNITY_ADVISERS_STAKE, startDate, startDate, startDate, true, false);
        }

        address[] memory contributorsKeys;
        ContribPeriod memory contribPeriod = ContribPeriod(softCapAmount, afterSoftCapDuration, hardCapAmount,
            startTime, endTime, false, false, false, false, 0, contributorsKeys);
        if (i < contribPeriods.length) {
            require(!contribPeriods[i].isEnabled);
            require(contribPeriods[i].startTime > now);
            contribPeriods[i] = contribPeriod;
        } else {
            contribPeriods.push(contribPeriod);
        }
    }

    // @notice Cancelles contribution period by destroying tokes reserved for it
    //  Must be executed by multisignature of many owners
    //  First contribution period can't be cancelled
    //  Past contribution period can't be cancelled
    // @param periodIndex Contribution period index (1-2)
    function cancelContribPeriod(uint periodIndex)
        onlymanyowners(sha3(msg.data))
    {
        require(periodIndex > 0);
        require(periodIndex < contribPeriods.length);
        ContribPeriod memory contribPeriod = contribPeriods[periodIndex];
        require(contribPeriod.startTime > now);
        require(contribPeriod.endTime > now);
        require(!contribPeriod.isCancelled);
        contribPeriods[periodIndex].isCancelled = true;
        district0xNetworkToken.destroyTokens(this, contribPeriodsStakes[periodIndex]);
    }

    // @notice Enables contribution period
    //  Must be executed by multisignature
    // @param periodIndex Contribution period index (0-2)
    function enableContribPeriod(uint8 periodIndex)
        onlymanyowners(sha3(msg.data))
    {
        require(periodIndex < contribPeriods.length);
        require(contribPeriods[periodIndex].startTime > 0);
        require(!contribPeriods[periodIndex].isCancelled);
        contribPeriods[periodIndex].isEnabled = true;
    }

    // @notice Sets new min. contribution amount
    //  Only owner can execute
    //  Cannot be executed while contribution period is running
    // @param _minContribAmount new min. amount
    function setMinContribAmount(uint _minContribAmount)
        onlyOwner
    {
        require(_minContribAmount > 0);
        require(getRunningContribPeriod() == CONTRIB_PERIODS);
        minContribAmount = _minContribAmount;
    }

    // @notice Sets District0xNetworkToken contract
    //  Generates all DNT tokens and assignes them to this contract
    //  If token contract has already generated tokens, do not generate again
    // @param _district0xNetworkToken District0xNetworkToken address
    function setDistrict0xNetworkToken(address _district0xNetworkToken)
        onlyOwner
    {
        require(_district0xNetworkToken != 0x0);
        district0xNetworkToken = District0xNetworkToken(_district0xNetworkToken);
        if (district0xNetworkToken.totalSupply() == 0) {
            district0xNetworkToken.generateTokens(this, FOUNDER1_STAKE
                .add(FOUNDER2_STAKE)
                .add(EARLY_CONTRIBUTOR_STAKE)
                .add(ADVISER_STAKE.mul(2))
                .add(LEGAL_ADVISER_STAKE)
                .add(COMMUNITY_ADVISERS_STAKE)
                .add(CONTRIB_PERIOD1_STAKE)
                .add(CONTRIB_PERIOD2_STAKE)
                .add(CONTRIB_PERIOD3_STAKE));
        }
    }

    // @notice Enables transfers of DNT
    //  Will be executed after first contribution period by owner
    function enableDistrict0xNetworkTokenTransfers()
        onlyOwner
    {
        require(contribPeriods.length > 0);
        ContribPeriod memory contribPeriod = contribPeriods[0];
        require(contribPeriod.endTime < now);
        tokenTransfersEnabled = true;
    }

    // @notice Kill method should not really be needed, but just in case
    function kill(address _to) onlymanyowners(sha3(msg.data)) external {
        suicide(_to);
    }

    function()
        payable
        stopInEmergency
    {
        contributeWithAddress(msg.sender);
    }

    // MiniMe Controller default settings for allowing token transfers.
    function proxyPayment(address _owner) payable public returns (bool) {
        throw;
        return false;
    }

    // Before transfers are enabled for everyone, only this contract is allowed to distribute DNT
    function onTransfer(address _from, address _to, uint _amount) public returns (bool) {
        return tokenTransfersEnabled || _from == address(this) || _to == address(this);
    }

    function onApprove(address _owner, address _spender, uint _amount) public returns (bool) {
        return tokenTransfersEnabled;
    }

    /*
     Following constant methods are used for tests and contribution web app
     They don't impact logic of contribution contract, therefor DOES NOT NEED TO BE AUDITED
     */

    // Used by contribution front-end to obtain contribution period properties
    function getContribPeriod(uint periodIndex)
        constant
        returns (bool[4] boolValues, uint[8] uintValues)
    {
        if (periodIndex < contribPeriods.length) {
            ContribPeriod memory contribPeriod = contribPeriods[periodIndex];
            boolValues[0] = contribPeriod.isEnabled;
            boolValues[1] = contribPeriod.isCancelled;
            boolValues[2] = contribPeriod.softCapReached;
            boolValues[3] = contribPeriod.hardCapReached;

            uintValues[0] = contribPeriod.softCapAmount;
            uintValues[1] = contribPeriod.afterSoftCapDuration;
            uintValues[2] = contribPeriod.hardCapAmount;
            uintValues[3] = contribPeriod.startTime;
            uintValues[4] = contribPeriod.endTime;
            uintValues[5] = contribPeriod.totalContributed;
            uintValues[6] = contribPeriod.contributorsKeys.length;
            uintValues[7] = contribPeriodsStakes[periodIndex];

            return (boolValues, uintValues);
        }
    }

    // Used by contribution front-end to obtain contribution contract properties
    function getConfiguration()
        constant
        returns (bool, uint, address, address, address, address, address[] _advisers, bool)
    {
        _advisers = new address[](advisers.length);
        for (uint i = 0; i < advisers.length; i++) {
            _advisers[i] = advisers[i];
        }
        return (stopped, required, wallet, founder1, founder2, earlySponsor, _advisers, tokenTransfersEnabled);
    }

    // Used by contribution front-end to obtain contributor's properties
    function getContributor(uint periodIndex, address contributorAddress)
        constant
        returns(uint, bool, uint)
    {
        Contributor contributor = contribPeriods[periodIndex].contributors[contributorAddress];
        return (contributor.amount, contributor.isCompensated, contributor.amountCompensated);
    }

    // Function to verify if all contributors were compensated
    function getUncompensatedContributors(uint periodIndex, uint offset, uint limit)
        constant
        returns (uint[] contributorIndexes)
    {
        var contributorsCount = contribPeriods[periodIndex].contributorsKeys.length;

        if (limit == 0) {
            limit = contributorsCount;
        }

        uint i = offset;
        uint resultsCount = 0;
        var _contributorIndexes = new uint[](limit);
        address[] contributorsKeys = contribPeriods[periodIndex].contributorsKeys;
        ContribPeriod contribPeriod = contribPeriods[periodIndex];

        while (i < contributorsCount && resultsCount < limit) {
            if (!contribPeriod.contributors[contributorsKeys[i]].isCompensated) {
                _contributorIndexes[resultsCount] = i;
                resultsCount++;
            }
            i++;
        }

        contributorIndexes = new uint[](resultsCount);
        for (i = 0; i < resultsCount; i++) {
            contributorIndexes[i] = _contributorIndexes[i];
        }
        return contributorIndexes;
    }

    function getNow()
        constant
        returns(uint)
    {
        return now;
    }
}
