pragma solidity ^0.4.8;

import "./VestedToken.sol";

contract D0xToken is VestedToken {
    string public constant name = "district0x Token";
    string public constant symbol = "d0x";
    uint public constant decimals = 18;

    uint public constant MAX_TOTAL_TOKEN_AMOUNT = 1000000000000000000000000000; // 1B

    address public minter;
    bool public transfersEnabled = false;

    modifier onlyMinter {
        assert(msg.sender == minter);
        _;
    }

    modifier maxTotalTokenAmountNotReached(uint amount) {
        assert(totalSupply.add(amount) <= MAX_TOTAL_TOKEN_AMOUNT);
        _;
    }

    modifier transfersAreEnabled {
        assert(transfersEnabled || msg.sender == minter);
        _;
    }

    function D0xToken(address _minter) {
        minter = _minter;
    }

    function transfer(address _to, uint _value)
        transfersAreEnabled
    {
        return super.transfer(_to, _value);
    }

    function transferFrom(address _from, address _to, uint _value)
        transfersAreEnabled
    {
        return super.transferFrom(_from, _to, _value);
    }

    function enableTransfers(bool _enabled)
        external
        onlyMinter
    {
        transfersEnabled = _enabled;
    }

    function createToken(address recipient, uint amount)
        external
        onlyMinter
        maxTotalTokenAmountNotReached(amount)
    {
        require(amount > 0);
        balances[recipient] = balances[recipient].add(amount);
        totalSupply = totalSupply.add(amount);
    }
}
