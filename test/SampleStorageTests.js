const { ethers, upgrades } = require("hardhat");
const { use, expect, assert } = require("chai");
const { solidity } = require("ethereum-waffle");

var BigNumber = require('big-number');
use(solidity);

describe("SampleStorage Contract", function() {

    let SimpleStorage;
    let simpleStorage;
    let owner;
    let addr1;
    let addr2;
    let addrs;

    beforeEach(async function () {

        // Initializing variables

        // Deploying contracts
        SimpleStorage = await ethers.getContractFactory("SimpleStorage");
        simpleStorage = await SimpleStorage.deploy();
        expect(simpleStorage.address).to.properAddress;

        // Getting test accounts
        [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
    });

    it("Should test contract", async function () {
        expect(true).to.equal(true);
    });

});