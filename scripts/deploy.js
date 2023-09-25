const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  const provider = hre.ethers.provider;
  const balance = await provider.getBalance(deployer);

  const tokenName = "TobiCoin";
  const ticker = "TOBI";

  const lock = await hre.ethers.deployContract("Tobi", {tokenName, ticker});

  await lock.waitForDeployment();

  console.log(
    `Contract TobiCoin with ${ethers.formatEther(
      balance
    )} ETH and name ${tokenName} and ticker ${ticker} deployed to ${lock.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});