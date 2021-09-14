// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;

contract SimpleStorage {

  uint storedData;
  address recent;
  uint time;
  uint blocknum;

  function set(uint x) public {
    storedData = x;                 //set data to input value
    recent = msg.sender;            //capture address of most recent user
    time = block.timestamp;         //capture epoch timestamp of recent interaction 
    blocknum = block.number;        //capture block number
  }

  function getData() public view returns (uint) {
    return storedData;
  }
  
  function getAddress() public view returns (address) {
      return recent;
  }
  
  function getTime() public view returns (uint) {
      return time;
  }
  
  function getBlock() public view returns (uint) {
      return blocknum;
  }
}