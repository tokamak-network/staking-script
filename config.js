const config = {
  'mainnet': {
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
};

exports.getConfig = function () {
  
  return config.rinkeby;
}
