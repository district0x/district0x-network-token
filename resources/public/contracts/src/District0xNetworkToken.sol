pragma solidity ^0.4.8;

import "./MiniMeToken.sol";
import "./VestedToken.sol";

contract District0xNetworkToken is MiniMeToken, VestedToken {
    function District0xNetworkToken(address _controller, address _tokenFactory)
        MiniMeToken(
            _tokenFactory,
            0x0,                        // no parent token
            0,                          // no snapshot block number from parent
            "District0x Network Token", // Token name
            18,                         // Decimals
            "DNT",                      // Symbol
            true                        // Enable transfers
            )
    {
        changeController(_controller);
    }
}
