const config = {
  'mainnet': {
    'network': '1',
    'contractAddress': {
      'layer2': '',
      'managers': {
        "TON":"0x2be5e8c109e2197d077d13a82daead6a9b3433c5",
        "WTON":"0xc4A11aaf6ea915Ed7Ac194161d2fC9384F15bff2",
        "Layer2Registry":"0x0b3E174A2170083e770D5d4Cf56774D221b7063e",
        "DepositManager":"0x56E465f654393fa48f007Ed7346105c7195CEe43",
        "SeigManager":"0x710936500aC59e8551331871Cbad3D33d5e0D909",
        "PowerTON":"0xd86d8950A4144D8a258930F6DD5f90CCE249E1CF"
      },
    },
  },
  'rinkeby': {
    'network': '4',
    'contractAddress': {
      'rootchain': '0xe7d6E84c7791c1755b1BC6A13e783a39e25df33b',
      'managers': {
        "TON":"0x3734E35231abE68818996dC07Be6a8889202DEe9",
        "WTON":"0xe1e1dDC0998CFB25f0a69C8AE5D0C71C5c193dE9",
        "RootChainRegistry":"0x9cEeBe2A59df4D21B2b4834b55aE9EEb233e7ad8",
        "DepositManager":"0x7bFeD43723bB67CE28e02298944119Ac9Af1da7B",
        "SeigManager":"0x97B1c1e71290304fCb404fF1ed356DbedDFa48a6",
        "PowerTON":"0x70495711c46c902Be24941effDc2b05974811f4B"
      },
    },
  },
};

exports.getConfig = function () {
  
  return config.rinkeby;
}
