// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;
import "./Storage.sol";

contract FirstContract{
Storage st;
constructor(address _address){
st=Storage(_address);
}

uint256 wi = 1000000000000000000;

mapping(address => uint256) public balances;

function storeBalance() public payable {
balances[msg.sender] += msg.value;
}

function getContractBalance() public view returns (uint256) {
return address(this).balance;
}
function getAddressBalance() public view returns (uint256) {
return balances[msg.sender];
}

function sendTokenToContract() public payable {}

function sendEtherToSender() public payable {
payable(msg.sender).transfer((wi * 1));
}

function getStorageValue() public view returns(uint){
return st.getValue();
}

function getStorageOwner() public view returns(address){
return st.getOwner();

}






}
