var Storage = artifacts.require("Storage");
var FirstContract = artifacts.require("FirstContract");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(Storage).then(function () {
    return deployer.deploy(FirstContract, Storage.address);
  });



};