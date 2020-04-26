module.exports = {
  networks: {
    42: {
      addressUrl: 'https://dashboard.tenderly.dev/contract/kovan/',
      txUrl: 'https://dashboard.tenderly.dev/tx/kovan/',
      // addressUrl: 'https://kovan.etherscan.io/address/',
      // txUrl: 'https://kovan.etherscan.io/tx/',
      metacoin: '0x65017AEBa31e0587640f6716d9ece00EA7AeD8Bb',
      relayHub: '0x2E0d94754b348D208D64d52d78BcD443aFA9fa52',
      stakeManager: '0x0ecf783407C5C80D71CFEa37938C0b60BD255FF8',
      paymaster: '0x7944ddd657078C28684fC446Bf9e6C96e714e46A',
    },
    3: {
      addressUrl: 'https://dashboard.tenderly.dev/contract/ropsten/',
      txUrl: 'https://dashboard.tenderly.dev/tx/ropsten/',
      // addressUrl: 'https://ropsten.etherscan.io/address/',
      // txUrl: 'https://ropsten.etherscan.io/tx/',
      metacoin: '0xE941cB2f8709720CC45375e39fbE6Fc706E47Fbb',
      relayHub: '0xEF46DD512bCD36619a6531Ca84B188b47D85124b',
      stakeManager: '0x41c7C7c1Bf501e2F43b51c200FEeEC87540AC925',
      paymaster: '0x6712204c025B234bb1072936A45Fe51967b0C0D8',
    }
  }
}
