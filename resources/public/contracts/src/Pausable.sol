pragma solidity ^0.4.11;


import "./Ownable.sol";


/*
 * Pausable
 * Abstract contract that allows children to implement an
 * emergency stop mechanism.
 * Made by OpenZeppelin https://github.com/OpenZeppelin/zeppelin-solidity/blob/master/contracts/lifecycle/Pausable.sol
 */
contract Pausable is Ownable {
  bool public stopped;
  event onEmergencyChanged(bool isStopped);

  modifier stopInEmergency {
    if (stopped) {
      throw;
    }
    _;
  }

  modifier onlyInEmergency {
    if (!stopped) {
      throw;
    }
    _;
  }

  // called by the owner on emergency, triggers stopped state
  function emergencyStop() external onlyOwner {
    stopped = true;
    onEmergencyChanged(stopped);
  }

  // called by the owner on end of emergency, returns to normal state
  function release() external onlyOwner onlyInEmergency {
    stopped = false;
    onEmergencyChanged(stopped);
  }

}
