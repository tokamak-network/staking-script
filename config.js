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
      'layer2': '0x4B2ca992AcE7D770D9f9A0c3eEEc9711059BE474',
      'managers': {
        "TON":"0x44d4F5d89E9296337b8c48a332B3b2fb2C190CD0",
        "WTON":"0x709bef48982Bbfd6F2D4Be24660832665F53406C",
        "Layer2Registry":"0xA609Cb2b9b0A4845077D2C965B7C6DFE5F59c847",
        "DepositManager":"0x57F5CD759A5652A697D539F1D9333ba38C615FC2",
        "SeigManager":"0x957DaC3D3C4B82088A4939BE9A8063e20cB2efBE",
        "PowerTON":"0x72bc526739e5Af59443d72F396ae04d15Df5Ef83"
      },
    },
  },
};

exports.getConfig = function () {
  
  return config.mainnet;
}
