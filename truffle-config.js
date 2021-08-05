const path = require("path");
const mnemonic = require("./secrets.json").mnemonic;
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {

    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/8889000a15cc4de29d8a720bf311254c"),
      network_id: '3',
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    
    develop: {
      port: 8545
    }
  }
};
