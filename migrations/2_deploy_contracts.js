const ConvertLib = artifacts.require('./ConvertLib.sol')
const MetaCoin = artifacts.require('./MetaCoin.sol')

const networks = {
  ropsten: {
    relayHubAddr: '0x1349584869A1C7b8dc8AE0e93D8c15F5BB3B4B87'
  }
}

const RelayHub = artifacts.require('./RelayHub.sol')

module.exports = async function (deployer, network) {
  let hub
  if (network === 'ropsten') {
    const hubAddr = networks[network].relayHubAddr
    console.log('hub=', hubAddr)
    hub = await RelayHub.at(hubAddr)
  } else {
    await deployer.deploy(RelayHub)
    hub = await RelayHub.at(RelayHub.address)
  }
  await deployer.deploy(ConvertLib)
  await deployer.link(ConvertLib, MetaCoin)

  await deployer.deploy(MetaCoin)
  await hub.depositFor(MetaCoin.address, { value: 1e17 })
  console.log('== Initializing Metacoin\'s Hub')
  const metacoin = await MetaCoin.at(MetaCoin.address)
  await metacoin.init_hub(hub.address)
  console.log('Finished 2/3 migrations files')
}
