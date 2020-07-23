# staking script manual
To run staking script, follow the step.

### 1. install package
```
npm install
```
### 2. get Infura tokens

### 3. Parameters

```
-f, --function-name [value], required. function to call
-i, --network-id [value], required for infura. ethereum network id. 1 for mainsale, 3 for rinkeby.
-p, --parameters [value]>, `arguments for function split by comma. default ${ defaultParameters }`, parseParams
-l, --provider-url [url], `web3 provider url. default ${ defaultProviderUrl }`
-L, --gas-limit [value], `gas limit for transaction. default ${ defaultGasLimit }`
-P, --gas-price [value], `gas price for transaction. default ${ defaultGasPrice }`
-N, --nonce [value], `nonce for transaction. default ${ defaultNonce }`
-v, --verbose, show debug logging
-k, --pk [value], required. transaction sender.
```

And, default parameter
```javascript
const defaultParameters = [];
const defaultProviderUrl = "http://localhost:8545";
const defaultWeiAmount = 0;
const defaultGasLimit = 4500000;
const defaultGasPrice = 20e9;
const defaultNonce = null;
```
### 4. run scipt
To run script, you should change --provider-url to your infura url. You can test stake/unstake at rinkeby.

#### Commit
```
node app.js --provider-url https://rinkeby.infura.io/v3/*** -k <privateKey> -f commit
```
#### Stake
stake 1 TON

If you want to stake 1 TON, insert 1e18.
```
node app.js --provider-url https://rinkeby.infura.io/v3/*** -k <privateKey> -f approveAndCall -p 1000000000000000000
```

#### Unstake
unstake 1 TON

> unstake uses ray as a unit of token, so if you want unstake 1 TON, You have to inser 1e27 instead 1e18.
```
node app.js --provider-url https://rinkeby.infura.io/v3/*** -k <privateKey> -f requestWithdrawal -p 1000000000000000000000000000
```

#### Restake
When you want to restake the token, use this method.
```
node app.js --provider-url https://rinkeby.infura.io/v3/*** -k <privateKey> -f redepositMulti
```

#### Withdrawal
When you want to withdraw token, use this method.
```
node app.js --provider-url https://rinkeby.infura.io/v3/*** -k <privateKey> -f processRequests
```