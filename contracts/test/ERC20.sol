pragma solidity =0.5.16;

import '../AvacadoERC20.sol';

contract ERC20 is AvacadoERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
