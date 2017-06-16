pragma solidity ^0.4.11;

import "./ERC20.sol";

/*
    Very slightly modified version of OpenZeppelin's LimitedTransferToken
    Original can be found at ./orig/LimitedTransferToken.sol or https://raw.githubusercontent.com/OpenZeppelin/zeppelin-solidity/master/contracts/token/LimitedTransferToken.sol
    Modifications:
    - Added return types "bool" so it's compact with MiniMeToken
*/

contract LimitedTransferToken is ERC20 {
  // Checks whether it can transfer or otherwise throws.
  modifier canTransfer(address _sender, uint _value) {
   if (_value > transferableTokens(_sender, uint64(now))) throw;
   _;
  }

  // Checks modifier and allows transfer if tokens are not locked.
  function transfer(address _to, uint _value) canTransfer(msg.sender, _value) returns (bool) {
   return super.transfer(_to, _value);
  }

  // Checks modifier and allows transfer if tokens are not locked.
  function transferFrom(address _from, address _to, uint _value) canTransfer(_from, _value) returns (bool) {
   return super.transferFrom(_from, _to, _value);
  }

  // Default transferable tokens function returns all tokens for a holder (no limit).
  function transferableTokens(address holder, uint64 time) constant public returns (uint256) {
    return balanceOf(holder);
  }
}
