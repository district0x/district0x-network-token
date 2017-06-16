pragma solidity ^0.4.11;

/*
    Copyright 2017, Jordi Baylina (Giveth)
*/

contract ApproveAndCallFallBack {
    function receiveApproval(address from, uint256 _amount, address _token, bytes _data);
}