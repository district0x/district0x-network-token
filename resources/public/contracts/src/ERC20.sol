pragma solidity ^0.4.11;


import './ERC20Basic.sol';


/*
 * ERC20 interface
 * see https://github.com/ethereum/EIPs/issues/20
 *
 * Slightly modified version of OpenZeppelin's ERC20
 * Original can be found ./orig/ERC20.sol or https://github.com/OpenZeppelin/zeppelin-solidity/blob/master/contracts/token/ERC20.sol
 * Modifications:
 * - Added doTransfer so it can be used in VestedToken with implmentation from MiniMe token
 *
 */
contract ERC20 is ERC20Basic {

  mapping(address => uint) balances;

  function allowance(address owner, address spender) constant returns (uint);
  function transferFrom(address from, address to, uint value) returns (bool);
  function approve(address spender, uint value) returns (bool);
  function approveAndCall(address spender, uint256 value, bytes extraData) returns (bool);
  event Approval(address indexed owner, address indexed spender, uint value);

  function doTransfer(address _from, address _to, uint _amount) internal returns(bool);
}
