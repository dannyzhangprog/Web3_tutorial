// import ethers.js
// create main function
// execute main function
const { ethers } = require("hardhat")

async function main() {
    // create factroy
    const fundMeFactory = await ethers.getContractFactory("FundMe")
    // deploy contract from factory
    const fundMe = await fundMeFactory.deploy(180)
    await fundMe.waitForDeployment()
    console.log(`contract has been deployed successful, contract address is ${fundMe.target}`)
}

main().then().catch((error) => {
    console.error(error)
})