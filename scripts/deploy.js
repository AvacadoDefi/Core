
const hre = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners(16);
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const TokenFactory = await ethers.getContractFactory("AvacadoFactory");
    //const factory = await TokenFactory.deploy(deployer.address);

    console.log("Token Factory address:", factory.address);
  
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });