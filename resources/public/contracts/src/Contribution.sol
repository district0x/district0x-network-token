pragma solidity ^0.4.8;

import "./SafeMath.sol";
import "./D0xToken.sol";
import "./Shareable.sol";
import "./Pausable.sol";

contract Contribution is Shareable, Pausable {
    using SafeMath for uint;

    address public d0xToken;
    address public wallet;
    address public founder1;
    address public founder2;
    address public earlySponsor;
    address[] public advisers;

    uint public constant FOUNDER1_STAKE = 35000000000000000000000000; // 35M
    uint public constant FOUNDER2_STAKE = 10000000000000000000000000; // 10M
    uint public constant EARLY_SPONSOR_STAKE = 5000000000000000000000000; // 5M
    uint public constant ADVISER_STAKE = 1250000000000000000000000; // 1.25M
    uint public constant CONTRIB_PERIOD1_STAKE = 55000000000000000000000000; // 55M
    uint public constant CONTRIB_PERIOD2_STAKE = 65000000000000000000000000; // 65M
    uint public constant CONTRIB_PERIOD3_STAKE = 75000000000000000000000000; // 75M

    uint8 public constant CONTRIB_PERIODS = 3;

    uint public minContribAmount = 1000000000000000000; // 1 ether

    uint public constant VESTING_CLIFF = 24 weeks;
    uint public constant VESTING_PERIOD = 72 weeks;

    struct Contributor {
        uint amount;
        bool isCompensated;
    }

    struct ContribPeriod {
        uint softCapAmount;
        uint afterSoftCapDuration;
        uint hardCapAmount;
        uint startTime;
        uint endTime;
        bool isEnabled;
        bool isCompensated;
        bool softCapReached;
        bool hardCapReached;
        uint totalContributed;
        address[] contributorsKeys;
        mapping (address => Contributor) contributors;
    }

    ContribPeriod[] public contribPeriods;
    uint[] public contribPeriodsStakes;

    event onContribution(uint indexed contribPeriodIndex, uint totalContributed, address indexed contributor, uint amount,
        uint contributorsCount);
    event onSoftCapReached(uint indexed contribPeriodIndex, uint endTime);
    event onHardCapReached(uint indexed contribPeriodIndex, uint endTime);

    function Contribution(
        address[] _owners,
        uint _required,
        address _wallet,
        address _founder1,
        address _founder2,
        address _earlySponsor,
        address[] _advisers
    )
        Shareable(_owners, _required)
    {
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

    function getRunningContribPeriod() constant returns (uint) {
        for (uint i = 0; i < contribPeriods.length; i++) {
            ContribPeriod contribPeriod = contribPeriods[i];
            if (!contribPeriod.hardCapReached &&
                !contribPeriod.isCompensated &&
                contribPeriod.isEnabled &&
                contribPeriod.startTime <= now &&
                contribPeriod.endTime >= now) {
                    return i;
                }
        }
        return CONTRIB_PERIODS;
    }

    // For debugging, TODO remove after audit
    function getTimes() constant returns (uint, uint, uint, uint) {
        return (
            contribPeriods[0].startTime,
            now - contribPeriods[0].startTime,
            contribPeriods[0].endTime - now,
            now
        );
    }

    function contribute()
        payable
        stopInEmergency
    {
        contributeWithAddress(msg.sender);
    }

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

        if (newTotalContributed >= contribPeriods[periodIndex].softCapAmount &&
            oldTotalContributed < contribPeriods[periodIndex].softCapAmount)
        {
            contribPeriods[periodIndex].softCapReached = true;
            contribPeriods[periodIndex].endTime = contribPeriods[periodIndex].afterSoftCapDuration.add(now);
            onSoftCapReached(periodIndex, contribPeriods[periodIndex].endTime);
        } else if (newTotalContributed >= contribPeriods[periodIndex].hardCapAmount &&
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

    function compensateContributors(uint periodIndex, uint offset, uint limit)
        onlyOwner
    {
        require(!contribPeriods[periodIndex].isCompensated);
        require(contribPeriods[periodIndex].isEnabled);
        require(contribPeriods[periodIndex].endTime < now);

        uint i = offset;
        uint j = 0;
        address[] contributorsKeys = contribPeriods[periodIndex].contributorsKeys;
        uint contributorsCount = contributorsKeys.length;
        ContribPeriod contribPeriod = contribPeriods[periodIndex];
        uint ratio = contribPeriodsStakes[periodIndex]
            .mul(1000000000000000000)
            .div(contribPeriods[periodIndex].totalContributed);

        while (i < contributorsCount && j < limit) {
            address contributorAddress = contributorsKeys[i];
            if (!contribPeriod.contributors[contributorAddress].isCompensated) {
                uint contributedAmount = contribPeriod.contributors[contributorAddress].amount;
                contribPeriod.contributors[contributorAddress].isCompensated = true;
                D0xToken(d0xToken).transfer(contributorAddress, contributedAmount.mul(ratio).div(1000000000000000000));
                j++;
            }
            i++;
        }
        if (i == contributorsCount) {
            contribPeriods[periodIndex].isCompensated = true;
        }
    }

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
            D0xToken(d0xToken).revokeAllTokenGrants(founder1);

            D0xToken(d0xToken).revokeAllTokenGrants(founder2);
            D0xToken(d0xToken).revokeAllTokenGrants(earlySponsor);

            for (uint j = 0; j < advisers.length; j++) {
                D0xToken(d0xToken).revokeAllTokenGrants(advisers[j]);
            }

            uint64 vestingDate = uint64(startTime.add(VESTING_PERIOD));
            uint64 cliffDate = uint64(startTime.add(VESTING_CLIFF));
            uint64 startDate = uint64(startTime);

            D0xToken(d0xToken).grantVestedTokens(founder1, FOUNDER1_STAKE, startDate, cliffDate, vestingDate);
            D0xToken(d0xToken).grantVestedTokens(founder2, FOUNDER2_STAKE, startDate, cliffDate, vestingDate);
            D0xToken(d0xToken).grantVestedTokens(earlySponsor, EARLY_SPONSOR_STAKE, startDate, cliffDate, vestingDate);

            for (j = 0; j < advisers.length; j++) {
                D0xToken(d0xToken).grantVestedTokens(advisers[j], ADVISER_STAKE, startDate, cliffDate, vestingDate);
            }
        }

        address[] memory contributorsKeys;
        ContribPeriod memory contribPeriod = ContribPeriod(softCapAmount, afterSoftCapDuration, hardCapAmount,
            startTime, endTime, false, false, false, false, 0, contributorsKeys);
        if (i < contribPeriods.length) {
            require(!contribPeriods[i].isCompensated);
            require(!contribPeriods[i].isEnabled);
            contribPeriods[i] = contribPeriod;
        } else {
            contribPeriods.push(contribPeriod);
        }
    }

    function getContribPeriod(uint periodIndex)
        constant
        returns (bool[4] boolValues, uint[8] uintValues)
    {
        if (periodIndex < contribPeriods.length) {
            ContribPeriod memory contribPeriod = contribPeriods[periodIndex];
            boolValues[0] = contribPeriod.isEnabled;
            boolValues[1] = contribPeriod.isCompensated;
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

    function getContribPeriodContributors(uint periodIndex)
        constant
        returns (address[])
    {
        if (periodIndex < contribPeriods.length) {
            ContribPeriod memory contribPeriod = contribPeriods[periodIndex];
            return contribPeriod.contributorsKeys;
        }
    }

    function getConfiguration()
        constant
        returns (bool, uint, address, address, address, address, address[] memory, bool)
    {
        var _advisers = new address[](advisers.length);
        for (uint i = 0; i < advisers.length; i++) {
            _advisers[i] = advisers[i];
        }
        return (stopped, required, wallet, founder1, founder2, earlySponsor, _advisers,
            D0xToken(d0xToken).transfersEnabled());
    }

    function cancelContribPeriod(uint periodIndex)
        onlymanyowners(sha3(msg.data))
    {
        require(periodIndex > 0);
        require(periodIndex < contribPeriods.length);
        ContribPeriod memory contribPeriod = contribPeriods[periodIndex];
        require(!contribPeriod.isCompensated);
        require(!contribPeriod.isEnabled);
        require(contribPeriod.startTime > now);
        require(contribPeriod.endTime > now);
        contribPeriods[periodIndex].isCompensated = true;
        D0xToken(d0xToken).transfer(0x0, contribPeriodsStakes[periodIndex]);
    }

    function enableContribPeriod(uint8 i)
        onlymanyowners(sha3(msg.data))
    {
        require(i < contribPeriods.length);
        require(contribPeriods[i].startTime > now);
        contribPeriods[i].isEnabled = true;
    }

    function getContributor(uint periodIndex, address contributorAddress)
        constant
        returns(uint, bool)
    {
        Contributor contributor = contribPeriods[periodIndex].contributors[contributorAddress];
        return (contributor.amount, contributor.isCompensated);
    }

    function setMinContribAmount(uint _minContribAmount)
        onlyOwner
    {
        require(_minContribAmount > 0);
        minContribAmount = _minContribAmount;
    }

    function setD0xToken(address _d0xToken)
        onlyOwner
    {
        require(_d0xToken != 0x0);
        d0xToken = _d0xToken;
        if (D0xToken(d0xToken).totalSupply() == 0) {
            D0xToken(d0xToken).createToken(this, FOUNDER1_STAKE
                .add(FOUNDER2_STAKE)
                .add(EARLY_SPONSOR_STAKE)
                .add(ADVISER_STAKE.mul(advisers.length))
                .add(CONTRIB_PERIOD1_STAKE)
                .add(CONTRIB_PERIOD2_STAKE)
                .add(CONTRIB_PERIOD3_STAKE));
        }
    }

    function enableD0xTokenTransfers()
        onlyOwner
    {
        require(contribPeriods.length > 0);
        require(!D0xToken(d0xToken).transfersEnabled());
        ContribPeriod memory contribPeriod = contribPeriods[0];
        require(contribPeriod.isCompensated);
        D0xToken(d0xToken).enableTransfers(true);
    }

    function disableD0xTokenTransfers()
        onlymanyowners(sha3(msg.data))
    {
        D0xToken(d0xToken).enableTransfers(false);
    }

    // kills the contract sending everything to `_to`.
    function kill(address _to) onlymanyowners(sha3(msg.data)) external {
        suicide(_to);
    }

    function()
        payable
        stopInEmergency
    {
        contributeWithAddress(msg.sender);
    }
}