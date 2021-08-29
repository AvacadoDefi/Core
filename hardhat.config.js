require('@nomiclabs/hardhat-waffle')
require('@nomiclabs/hardhat-ethers')
require("@nomiclabs/hardhat-web3");
const network = require("./43112/bin.json")


/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      {
        version: '0.5.16',
        settings: {
          optimizer: {
            enabled: true,
            runs: 50
          }
        }
      }
    ]
  },
  networks: {
    hardhat: {
      gasPrice: 470000000000,
      chainId: 43112,
      initialDate: '2020-10-10'
    },
    fuji: {
      url: network.url,
      accounts: [network.key],
      gasPrice: 470000000000,
      chainId: 43113,
      //accounts: [FUJI_ACCOUNT]
    },
    mainnet: {
      url: 'https://api.avax.network/ext/bc/C/rpc',
      gasPrice: 470000000000,
      chainId: 43114,
      //accounts: [MAIN_ACCOUNT]
    }
  }
}
