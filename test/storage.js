const Storage = artifacts.require("Storage");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Storage", function (/* accounts */) {
  it("initial test value", async function () {
    const storage= await Storage.deployed();
    await storage.write(2929);
     const result= await storage.read();
   
    expect(result.toNumber()).to.equal(2929);
  });




});
