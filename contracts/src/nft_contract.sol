// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MetaNexusNFT is ERC721, Ownable {
    uint256 public tokenCounter;

    struct NFTMetadata {
        string name;
        string description;
        string tokenURI;
    }

    mapping(uint256 => NFTMetadata) public nftMetadata;

    constructor() ERC721("MetaNexusNFT", "MNX") {
        tokenCounter = 0;
    }

    // Mint a new NFT
    function mintNFT(address recipient, string memory _name, string memory _description, string memory _tokenURI) public onlyOwner {
        uint256 newTokenId = tokenCounter;
        _safeMint(recipient, newTokenId);

        nftMetadata[newTokenId] = NFTMetadata({
            name: _name,
            description: _description,
            tokenURI: _tokenURI
        });

        tokenCounter++;
    }

    // Override tokenURI to return metadata URI
    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
        return nftMetadata[tokenId].tokenURI;
    }
}
