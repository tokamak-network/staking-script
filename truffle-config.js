require("babel-register");
require("babel-polyfill");

const HDWalletProvider = require("truffle-hdwallet-provider");
require("dotenv").config();

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*",
      gas: 4200000,
      gasPrice: 20e9,
    },
    ganache: {
      host: "localhost",
      port: 7545,
      network_id: "*",
      gas: 4200000,
    },
    rinkeby: {
      network_id: 3,
      provider: providerRinkeby,
      gas: 4200000,
      gasPrice: 30e9,
    },
    mainnet: {
      network_id: 1,
      provider: providerMainnet,
      gas: 4200000,
      gasPrice: 25e9,
    },
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
};