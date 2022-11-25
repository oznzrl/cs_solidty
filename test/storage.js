const Storage = artifacts.require("Storage");
const truffleAssert=require("truffle-assertions");
/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Storage", function (accounts ) {
  it("initial test value", async function () {
    const storage= await Storage.deployed();

    await storage.setValue(5);
    const result= await storage.getValue();
    expect(result.toNumber()).to.equal(5);
  });


  it("call owner and use constructer", async function () {
    const storage= await Storage.deployed();
   expect((await storage.getOwner())).to.equal(accounts[0]);
  });
  

 it("trigger require", async function () {
    const storage= await Storage.deployed();
          
    await truffleAssert.fails(
      storage.changeOwner(accounts[4],{from:accounts[2]}),
      truffleAssert.ErrorType.REVERT,
      "Require message:OnlyOwner"
      );   

    }); 

    it("trigger modifier", async function () {
      const storage= await Storage.deployed();
        
      await truffleAssert.fails(
        storage.setValue(22,{from:accounts[4]}),
        truffleAssert.ErrorType.REVERT,
        "Modifier message:OnlyOwner"
        );
      });

      it("change Owner event ", async function () {
        const storage= await Storage.deployed();
        truffleAssert.eventEmitted((await storage.changeOwner(accounts[2],{from:accounts[0]})) ,'OwnerChanged');

      });











});
