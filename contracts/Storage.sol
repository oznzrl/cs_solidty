// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Storage {

uint public numValue;

address owner;

event OwnerChanged(string message);

constructor(){
owner=msg.sender;
}

modifier onlyOwner{
  require(msg.sender==owner,"Modifier message:OnlyOwner");
  _;
}

function getOwner() public view  returns(address){
  return owner;
}

function changeOwner(address _address) public{
  require(msg.sender==owner,"Require message:OnlyOwner");
  owner=_address;
  emit OwnerChanged("OwnerChanged");
}


function getValue()public view returns(uint){
  return numValue;
}

function setValue(uint _numValue) public onlyOwner{
numValue=_numValue;
}


}
