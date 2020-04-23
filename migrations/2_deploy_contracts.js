const MetaCoin = artifacts.require('./MetaCoin.sol')

module.exports = async function deployFunc(deployer, network) {
  await deployer.deploy(MetaCoin)
  console.log('Finished 2/3 migrations files')
}
