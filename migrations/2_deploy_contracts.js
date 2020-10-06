/* global */
const MetaCoin = artifacts.require('MetaCoin.sol')
const Forwarder = artifacts.require('Forwarder.sol')

module.exports = async function deployFunc (deployer, network) {
  // first, check if already deployed through truffle:
  const forwarder = await Forwarder.deployed().then(c => c.address).catch(e => require('../build/gsn/Forwarder.json').address)
  if (!forwarder) {
    throw new Error('no valid forwarder for network ' + network)
  }
  console.log('using forwarder: ', forwarder)
  await deployer.deploy(MetaCoin, forwarder, { gas: 2.6e6 })
  console.log('Finished 2/3 migrations files')
}
