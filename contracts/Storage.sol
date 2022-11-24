// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Storage {
  constructor()  {
  }
uint val;
function write(uint _val) public returns(uint){val=_val; return val;}

function read() public pure returns(uint){return 2929;}
}
