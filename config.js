const config = {
  'mainnet': {
    'baseURL': 'https://dashboard-api.tokamak.network',
    'prefixTransactionHash': 'https://etherscan.io/tx/',
    'prefixAddress': 'https://etherscan.io/address/',
    'network': '1',
    'contractAddress': {
      'rootchain': '',
      'managers': {
        'DepositManager': '',
        'TON': '',
        'WTON': '',
      },
    },
  },
  'rinkeby': {
    'baseURL': 'https://dashboard-api.tokamak.network/rinkeby',
    'prefixTransactionHash': 'https://rinkeby.etherscan.io/tx/',
    'prefixAddress': 'https://rinkeby.etherscan.io/address/',
    'network': '4',
    'contractAddress': {
      'rootchain': '0xfe40ecbd972675d3d6766d94d04373bf9d8896b6',
      'managers': {
        "TON":"0x3e136394a481f8c9595d63a1fa70d25c7f388c2c",
        "WTON":"0x36bba598ca0b329eb4162ba011086d09111b4702",
        "DepositManager":"0x95ff08f500ecb391778a3096ec767bdb18e17cf6",
        "RootChainRegistry":"0x8dc9d372ebd9ed0d8f991226eaaf331ad11dbb4d",
        "SeigManager":"0x32ccc91e3dd884090a580f45172c62393bd858c5",
        "PowerTON":"0x4cc9b4cf3a4a6f8e7cadf8fcd442873c3f71ab73"
      },
    },
  },
  'development': {
    'baseURL': 'http://127.0.0.1:9002',
    'prefixTransactionHash': 'https://rinkeby.etherscan.io/tx/',
    'prefixAddress': 'https://rinkeby.etherscan.io/address/',
    'network': '1337',
  },
};

// const query = window.location.search;
// const params = new URLSearchParams(query);
// const network = params.get('network');
exports.getConfig = function () {
  // switch (network) {
  // case 'rinkeby':
  //   return config.rinkeby;
  // case 'development':
  //   return config.development;
  // default:
  //   return config.rinkeby;
  // }
  return config.rinkeby;
}

exports.getLink = function(type) {
  // TODO: migrate to config/default.json
  if (type === 'use') {
    return 'https://docs.tokamak.network/';
  } else if (type === 'register') {
    return 'https://docs.tokamak.network/';
  }
}
