# GSN-Based metacoin.

This a basic metacoin, which minimal modifications to support working through GSN, without the client paying for gas.
You still need a wallet, but only for signing transactions, not paying for them.

See https://github.com/openeth-dev/gsn for the GSN project.

The Metacoin itself pays for all transactions.

Other than supporting GSN, the project added links to etherscan, to ease seeing the various components on the blockchain

## Installing on a network

1. Add desired network to `truffle.js` (e.g. copy the "rinkeby" entry)
2. *replace the account mnemonic* - the account "0xbAe0607721DF2B87Ab99Bf838FBee0B51713Cdf8" can only be used on test networks.
3. Make sure the account you use is funded with at least 2 eth
	(during depoloyment, we make a "deposit" for our contract to pay for tranactions gas with 1 eth, so we need to have that in addition to deployment costs)
2. Run `truffle compile`
3. Run ` HUB=0xd216153c06e857cd7f72665e0af1d7d82172f494 truffle migrate --network rinkeby`
4. Run `yarn run pack`
5. Now the folder `build/` contains a metacoin website.
6. To serve it locally, use `npx serve build/`, and then open `http://localhost:5000`
7. Point your *Metamask* to rinkeby network, and you can mint and transfer coins - without paying gas. The "Metacoin" itself pays for the gas (from the above deposit)

### Support for other networks

The project supports any network, not only rinkeby. There are 2 small UI issues that can be fixed first in `app/scripts/index.js`
1. there is "etherscan" URL that points to rinkeby. replace it with etherscan/blockscout/etc link for your network.
2. when the contract can't be find on-chain, the error message "switch to network *rinkeby*"