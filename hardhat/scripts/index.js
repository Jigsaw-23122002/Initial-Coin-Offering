const { ethers } = require("hardhat");
require("dotenv").config();
const { CRYPTO_DEVS_NFT_CONTRACT_ADDRESS } = require("../constants");

async function main() {
  const cryptoDevsTokenContract = await ethers.getContractFactory(
    "CryptoDevToken"
  );

  const deployCryptoDevTokenContract = await cryptoDevsTokenContract.deploy(
    CRYPTO_DEVS_NFT_CONTRACT_ADDRESS
  );

  console.log(
    "CryptoDev Token Contract Address:",
    deployCryptoDevTokenContract.address
  );
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
