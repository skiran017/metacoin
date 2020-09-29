module.exports = {
  networks: {
    42: {
      addressUrl: 'https://dashboard.tenderly.co/contract/kovan/',
      txUrl: 'https://dashboard.tenderly.co/tx/kovan/',
      // addressUrl: 'https://kovan.etherscan.io/address/',
      // txUrl: 'https://kovan.etherscan.io/tx/',
      metacoin: '0x74440273b6442C879A7174Fed79b18720B4f2218',
      relayHub: '0xc76DaB4e73b5a2af24375D7C2A668C0B6bCdE0Df',
      paymaster: '0x82b22404fC614f1036FaA9787610aeDd38d365ae',
      forwarder: '0x79Dd243E7966FBB5F539b9f7798AC6CB7c13585B'
    },
    3: {
      addressUrl: 'https://dashboard.tenderly.co/contract/ropsten/',
      txUrl: 'https://dashboard.tenderly.co/tx/ropsten/',
      // addressUrl: 'https://ropsten.etherscan.io/address/',
      // txUrl: 'https://ropsten.etherscan.io/tx/',
      metacoin: '0x8E0531f80ab2F6F108F271Adec639F28C3De4687',
      relayHub: '0xbfA4b7A75F8e38a453508A86B3b7833F3627C40c',
      paymaster: '0x55FfF885da4A9950a7A4Fad9ae78fE3801Bf5A5d',
      forwarder: '0xB34D046DebF9a427D2818a22b5A9285b798F70f8'
    },
    4: {
      addressUrl: 'https://dashboard.tenderly.co/contract/rinkeby/',
      txUrl: 'https://dashboard.tenderly.co/tx/rinkeby/',
      // addressUrl: 'https://rinkeby.etherscan.io/address/',
      // txUrl: 'https://rinkeby.etherscan.io/tx/',
      metacoin: '0x9Ef5BFBBe0aF2f6b3AE25154A6236B696f5E9eDD',
      relayHub: '0xD6b9b2eA2b2799ACcfb38c0FcE423f80407D3E72',
      paymaster: '0x186716C974e864868a2fc052632D528845D18F29',
      forwarder: '0xf86a8396E0e94AD5d6E499F71bB0A64a596958f9'
    }
  }
}
