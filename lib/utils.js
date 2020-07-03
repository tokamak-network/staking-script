const moment = require("moment");
const TruffleContract = require("truffle-contract");

// https://github.com/ethereum/web3.js/issues/1102#issuecomment-355198298
/* eslint-disable prefer-spread, prefer-rest-params */
exports.loadTruffleContract = function (artifacts, provider, address) {
  const contract = TruffleContract(artifacts);
  contract.setProvider(provider);

  if (typeof contract.currentProvider.sendAsync !== "function") {
    contract.currentProvider.sendAsync = function () {
      return contract.currentProvider.send.apply(contract.currentProvider, arguments);
    };
  }

  return contract.at(address);
};
/* eslint-enable prefer-spread, prefer-rest-params */

exports.parseUnixTimestamp = function (timestamp) {
  const format = "YYYY/MM/DD HH:mm:ss";
  return moment.unix(timestamp).utc().format(format);
};