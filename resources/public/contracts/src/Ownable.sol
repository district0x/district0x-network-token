pragma solidity ^0.4.8;

contract Ownable {
  address public owner = msg.sender;

  modifier only_owner {
    require(msg.sender == owner);
    _;
  }

  function changeOwner(address _newOwner)
  only_owner
  {
    if(_newOwner == 0x0) throw;
    owner = _newOwner;
  }
}