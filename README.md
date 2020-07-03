# staking script manual

install package
```
npm install
```


### commit
node app.js -f commit --provider-url https://rinkeby.infura.io/v3/***

### stake
node app.js --provider-url https://rinkeby.infura.io/v3/*** -f approveAndCall -p 1000000000000000000

### unstake
node app.js --provider-url https://rinkeby.infura.io/v3/*** -f requestWithdrawal -p 1000000000000000000