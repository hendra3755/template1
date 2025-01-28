import hre from "hardhat";

export async function main() {
    console.log('Deploying AnyFlowERC20...')

    const args = [
        '0x5b0A56AE8dECde9cb3cf132024D116D5AF8dDc83',   // _initialOwner
        1 * 10 ** 18,   // _initialSupply
        'OrionAnyFlow', // _name
        'OAF',           // _symbol
    ] as const;

    const contract = await hre.viem.deployContract("AnyFlowERC20", args);

    console.log(`Contract AnyFlowERC20 deployed to: ${contract.address}`);
}

main()
    .then(() => process.exit(0));
