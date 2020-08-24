const MetaCoin = artifacts.require('MetaCoin.sol')
const Forwarder = artifacts.require('Forwarder.sol')
const HashcashPaymaster = artifacts.require('HashcashPaymaster.sol')

module.exports = async function deployFunc (deployer, network) {
  const netid = await web3.eth.net.getId()

  // first, check if already deployed through truffle:
  let forwarder = await Forwarder.deployed().then(c => c.address).catch(e => null)
  if (!forwarder) {
    if (netid > 100) {
      forwarder = (await deployer.deploy(Forwarder)).address
    } else {
      // don't automatically install on other networks. should have entires here.
      const forwarders = {
        42: '0x663946D7Ea17FEd07BF1420559F9FB73d85B5B03',
        3: '0x766400B526fB5889AE6C52b369671F5eE137880b'
      }
      forwarder = forwarders[netid]
    }
    if (!forwarder) {
      throw new Error('no valid forwarder for network ', network)
    }
  }
  console.log('using forwarder: ', forwarder)
  await deployer.deploy(MetaCoin, forwarder)
  from = (await web3.eth.getAccounts())[0]
  await deployer.deploy(HashcashPaymaster, 15)
  const pm = await HashcashPaymaster.deployed()
  pm.setRelayHub(require('../build/gsn/RelayHub').address, {from})
  await web3.eth.sendTransaction({from,to:HashcashPaymaster.address, value:5e17})
  console.log('Finished 2/3 migrations files')
}
