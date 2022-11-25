const FirstContract = artifacts.require("FirstContract");
const Storage = artifacts.require("Storage");
const truffleAssert = require("truffle-assertions");
contract("FirstContract", (accounts) => {


it("First contract imports Storage Contract", async function () {
const contract = await FirstContract.deployed();
const storage = await Storage.deployed();

const result = await storage.setValue(2929);
expect((await contract.getStorageValue()).toNumber()).to.equal(
(await storage.getValue()).toNumber());
});


});
