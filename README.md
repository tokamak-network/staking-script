# staking script manual
To run staking script, follow the step.

### 1. install package
```
npm install
```
### 2. get Infura tokens

### 3. replace "insert new mnemonic" to valid mnemonic at app.js:56
```
const mnemonic = "<insert new mnemonic>"; -> const mnemonic = "<your mnemonic>";
```

### 4. change provider at app.js:203
```
new HDWalletProvider(mnemonic, providerUrl, 2); -> new HDWalletProvider(mnemonic, providerUrl, <your-account-index>);
```

### 5. run scipt
To run script, you should change --provider-url to your infura url. You can test stake/unstake at rinkeby.

#### commit
```
node app.js --provider-url https://rinkeby.infura.io/v3/*** -f commit
```
#### stake
stake 1 TON
```
node app.js --provider-url https://rinkeby.infura.io/v3/*** -f approveAndCall -p 1000000000000000000
```

#### unstake
unstake 1 TON
```
node app.js --provider-url https://rinkeby.infura.io/v3/*** -f requestWithdrawal -p 1000000000000000000
```