//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract SampleContract is Ownable {

    // Variables
    uint storedData;
    
    /**
     @notice Contract constructor method.
     */
    constructor() {

    }

    function set(uint x) public onlyOwner {
        storedData = x;
    }

    function get() public view returns (uint) {
        return storedData;
    }

    /**
     @notice Method used to return the contract balance.
     @return Current contract balance.
     */
    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}