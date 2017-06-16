pragma solidity ^0.4.8;


import './ERC20Basic.sol';


/*
 * ERC20 interface
 * see https://github.com/ethereum/EIPs/issues/20
 */
contract ERC20 is ERC20Basic {

  mapping(address => uint) balances;

  /*
   * Fix for the ERC20 short address attack
   */
  modifier onlyPayloadSize(uint size) {
     if(msg.data.length < size + 4) {
       throw;
     }
     _;
  }

  function allowance(address owner, address spender) constant returns (uint);
  function transferFrom(address from, address to, uint value) returns (bool);
  function approve(address spender, uint value) returns (bool);
  function approveAndCall(address spender, uint256 value, bytes extraData) returns (bool);
  event Approval(address indexed owner, address indexed spender, uint value);

  function doTransfer(address _from, address _to, uint _amount) internal returns(bool);
}
