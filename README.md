This is a [HardHat](https://hardhat.org/) project.

# Getting Started

First run this command to install dependencies:

```
$ npm install
```

Then you can compile contracts or execute the tests:

```
$ npx hardhat compile
$ npx hardhat test
```

# Deploying the contracts

Execute deploy script:

```
$ npx hardhat run scripts/deploy.js --network [network]
```

Verifying the contracts:

```
$ npx hardhat clean && npx hardhat verify --network [network] [contract_address]

# In case the contract has parameters:
$ npx hardhat verify --network [network] [contract_address] param1 param2
```

# Flatten Contracts

```
$ npx hardhat flatten contracts/SimpleStorage.sol > flattened/SimpleStorage.sol
```
