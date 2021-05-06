// npx hardhat run --network [network] scripts/deploy.js

async function main() {

    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account => ", deployer.address);
    console.log("Account balance => ", (await deployer.getBalance()).toString());

    // Deploying autograph contract
    SimpleStorage = await ethers.getContractFactory("SimpleStorage");
    simpleStorage = await SimpleStorage.deploy();
    console.log("SimpleStorage address => ", simpleStorage.address);

}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });