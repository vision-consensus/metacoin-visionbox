const port = process.env.HOST_PORT || 8090

module.exports = {
  networks: {
    vpioneer: {
      // Don't put your private key here:
      // privateKey: process.env.PRIVATE_KEY_MAINNET,
      privateKey: '92593192a0816a4b4394b72b0d7504ec59a24d478c89cf4826503ebb31ae103e',
      /*
Create a .env file (it must be gitignored) containing something like

  export PRIVATE_KEY_MAINNET=4E7FECCB71207B867C495B51A9758B104B1D4422088A87F4978BE64636656243

Then, run the migration with:

  source .env && visionbox migrate --network mainnet

*/
      userFeePercentage: 100,
      feeLimit: 1e8,
      fullHost: 'https://vpioneer.infragrid.v.network',
      network_id: '1'
    },
    development: {
      privateKey: 'your private key',
      userFeePercentage: 0,
      feeLimit: 1e8,
      fullHost: 'http://127.0.0.1:' + port,
      network_id: '9'
    },
    compilers: {
      solc: {
        // version: '0.5.1'
        version: '0.8.0'
      }
    }
  },
  // solc compiler optimize
  solc: {
    optimizer: {
      enabled: false, // default: false, true: enable solc optimize
      runs: 200
    },
    evmVersion: 'istanbul'
  }
}
