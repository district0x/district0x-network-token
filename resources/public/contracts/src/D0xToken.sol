pragma solidity ^0.4.8;

import "./VestedToken.sol";

contract D0xToken is VestedToken {
    string public constant name = "district0x Token";
    string public constant symbol = "d0x";
    uint public constant decimals = 18;

    uint public constant MAX_TOTAL_TOKEN_AMOUNT = 250000000000000000000000000; // 250M

    address public minter;


    modifier only_minter {
        assert(msg.sender == minter);
        _;
    }

    modifier max_total_token_amount_not_reached(uint amount) {
        assert(totalSupply.add(amount) <= MAX_TOTAL_TOKEN_AMOUNT);
        _;
    }

    function D0xToken(address _minter) {
        minter = _minter;
    }

    function createToken(address recipient, uint amount)
        external
        only_minter
        max_total_token_amount_not_reached(amount)
    {
        require(amount > 0);
        balances[recipient] = balances[recipient].add(amount);
        totalSupply = totalSupply.add(amount);
    }
}
