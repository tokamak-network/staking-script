# staking script manual
To run staking script, follow the step.

1. install package
```
npm install
```
2. get Infura tokens

3. replace "<insert new mnemonic>" to valid mnemonic at app.js:56
```
const mnemonic = "<insert new mnemonic>"; -> const mnemonic = "<your mnemonic>";
```

4. change provider at app.js:203
```
new HDWalletProvider(mnemonic, providerUrl, 2); -> new HDWalletProvider(mnemonic, providerUrl, <your-account-index>);
```


### commit
```
node app.js -f commit --provider-url https://rinkeby.infura.io/v3/***
```
### stake
```
node app.js --provider-url https://rinkeby.infura.io/v3/*** -f approveAndCall -p 1000000000000000000
```

### unstake
```
node app.js --provider-url https://rinkeby.infura.io/v3/*** -f requestWithdrawal -p 1000000000000000000
```