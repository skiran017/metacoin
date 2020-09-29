# GSN-Based metacoin.

This a basic metacoin, with minimal modifications to support working through GSN, without the client paying for gas.
You still need a wallet, but only for signing transactions, not paying for them.

See https://github.com/opengsn/gsn for the GSN project.

The Metacoin itself pays for all transactions.

Other than supporting GSN, the project added links to [tenderly](https://dashboard.tenderly.dev/contract/kovan/0x2E0d94754b348D208D64d52d78BcD443aFA9fa52) and [etherscan](https://kovan.etherscan.io/address/0x2e0d94754b348d208d64d52d78bcd443afa9fa52), to ease seeing the various components on the blockchain

## Running the project
#### The "TL;DR"
1. Run `yarn install `
2. Run `yarn run gsn-with-ganache` to run local ganache and bring up GSN contracts and relayer.
3. In another terminal, run `truffle migrate` to install MetaCoin
4. Run `yarn run dev` to run metacoin demo on `http://localhost:8080`
5. open a browser, and you can mint, and send coins, with no eth in your (metamask) account
6. you can also switch to `ropsten`/`kovan`/`rinkeby` to see it running there
    (or open it in http://metacoin.opengsn.org)

#### NOTES:

The `gsn-with-ganache` script above does 2 things:

- Starts `ganache` with same chainId and networkId (to overcome [limitation](https://github.com/MetaMask/metamask-extension/issues/8385) of Metamask)
- calls `npx gsn start`, to start all GSN components locally.
