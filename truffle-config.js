const path = require("path");
const mnemonic = ''

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    /*ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/8889000a15cc4de29d8a720bf311254c");
      },
      network_id: '3',
    },*/
    develop: {
      port: 8545
    }
  }
};
