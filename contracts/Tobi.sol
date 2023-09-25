// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Tobi is ERC20, Ownable {
    string private message;

    constructor() ERC20("TobiCoin", "TOBI") {
        _mint(msg.sender, 21000000 * 10 ** decimals());
    }

    function setMessage(string memory _message) public {
        message = _message;
    }

    function getMessage() public view returns(string memory){
        return message;
    }
}