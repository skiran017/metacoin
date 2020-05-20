module.exports = {
  networks: {
    42: {
      addressUrl: 'https://dashboard.tenderly.dev/contract/kovan/',
      txUrl: 'https://dashboard.tenderly.dev/tx/kovan/',
      // addressUrl: 'https://kovan.etherscan.io/address/',
      // txUrl: 'https://kovan.etherscan.io/tx/',
      metacoin: '0x9Cf40EF3D1622efe270fE6fe720585B4BE4eeEff',
      relayHub: '0x2E0d94754b348D208D64d52d78BcD443aFA9fa52',
      stakeManager: '0x0ecf783407C5C80D71CFEa37938C0b60BD255FF8',
      paymaster: '0xBD71d3eCBbC088f59515d2B8FC0eBBD695eeD01a',
    },
    3: {
      addressUrl: 'https://dashboard.tenderly.dev/contract/ropsten/',
      txUrl: 'https://dashboard.tenderly.dev/tx/ropsten/',
      // addressUrl: 'https://ropsten.etherscan.io/address/',
      // txUrl: 'https://ropsten.etherscan.io/tx/',
      metacoin: '0xec9eE395E82A6CB7b8D9cF7D0D2c07bB9e0C5Cd1',
      relayHub: '0xEF46DD512bCD36619a6531Ca84B188b47D85124b',
      stakeManager: '0x41c7C7c1Bf501e2F43b51c200FEeEC87540AC925',
      paymaster: '0x9ebA53c5e007327c98101cD6129883f55C83e59A',
    }
  }
}
