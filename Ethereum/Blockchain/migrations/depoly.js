const Voting = artifacts.require("Voting");

module.exports = async function (deployer) {
  const candidateNames = ["Alice", "Bob", "Charlie"];
  await deployer.deploy(Voting, candidateNames);
};