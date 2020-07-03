require("babel-register");
require("babel-polyfill");

const HDWalletProvider = require("truffle-hdwallet-provider");
require("dotenv").config();

const mnemonic = process.env.MNEMONIC || "token onther token onther token onther token onther token onther token onther";

const rinkebyProviderUrl = "https://rinkeby.infura.io/v3/***";
const mainnetProviderUrl = "https://mainnet.infura.io/v3/***";
// const rinkebyProviderUrl = "https://rinkeby.infura.io";
// const mainnetProviderUrl = "https://api.myetherapi.com/eth";

const providerRinkeby = () => new HDWalletProvider(mnemonic, rinkebyProviderUrl, 0, 50);
const providerMainnet = () => new HDWalletProvider(mnemonic, mainnetProviderUrl, 0, 50);

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