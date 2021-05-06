// npx hardhat run --network [network] scripts/deploy.js

async function main() {

    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account => ", deployer.address);
    console.log("Account balance => ", (await deployer.getBalance()).toString());

    // Deploying autograph contract
    SampleContract = await ethers.getContractFactory("SampleContract");
    sampleContract = await SampleContract.deploy();
    console.log("SampleContract address => ", sampleContract.address);

}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });