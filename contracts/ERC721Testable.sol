// SPDX-License-Identifier: Apache-2.0

pragma solidity 0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract ERC721Testable is ERC721 {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIds;
    string private _baseTokenURI;

    constructor(
        string memory name,
        string memory symbol,
        string memory baseTokenURI
    ) ERC721(name, symbol) {
        _baseTokenURI = baseTokenURI;
    }

    function mint(address to) public {
        _mint(to, _tokenIds.current());
        _tokenIds.increment();
    }

     function _baseURI() internal view virtual override returns (string memory) {
         return _baseTokenURI;
     }
}
