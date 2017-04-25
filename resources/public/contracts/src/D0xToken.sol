pragma solidity ^0.4.8;

import "./StandardToken.sol";
import "./SafeMath.sol";

contract D0xToken is StandardToken, SafeMath {
    string public constant name = "district0x Token";
    string public constant symbol = "d0x";
    uint public constant decimals = 18;

    uint public constant MAX_TOTAL_TOKEN_AMOUNT = 250000000000000000000000000;

    address public minter;

    mapping (address => uint) public balanceLocks;

    modifier only_minter {
        assert(msg.sender == minter);
        _;
    }

    modifier max_total_token_amount_not_reached(uint amount) {
        assert(safeAdd(totalSupply, amount) <= MAX_TOTAL_TOKEN_AMOUNT);
        _;
    }

    modifier is_balance_unlocked(address subject) {
        assert(now > balanceLocks[subject]);
        _;
    }

    function D0xToken(address _minter) {
        minter = _minter;
    }

    function mintToken(address recipient, uint amount)
        external
        only_minter
        max_total_token_amount_not_reached(amount)
    {
        balances[recipient] = safeAdd(balances[recipient], amount);
        totalSupply = safeAdd(totalSupply, amount);
    }

    function setBalanceLock(address recipient, uint unlockTime)
        only_minter
    {
        balanceLocks[recipient] = unlockTime;
    }

    function transfer(address recipient, uint amount)
        is_balance_unlocked(msg.sender)
        returns (bool success)
    {
        return super.transfer(recipient, amount);
    }

    function transferFrom(address sender, address recipient, uint amount)
        is_balance_unlocked(sender)
        returns (bool success)
    {
        return super.transferFrom(sender, recipient, amount);
    }
}
