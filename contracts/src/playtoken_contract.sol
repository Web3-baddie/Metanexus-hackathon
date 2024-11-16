// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PlayToken is ERC20, Ownable {
    uint256 public initialSupply = 1000000 * (10 ** 18); // 1 million tokens with 18 decimals

    constructor() ERC20("PlayToken", "PLT") {
        _mint(msg.sender, initialSupply);
    }

    // Mint additional tokens (only by the owner)
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    // Burn tokens from a specified address (only by the owner)
    function burn(address from, uint256 amount) public onlyOwner {
        _burn(from, amount);
    }
}
