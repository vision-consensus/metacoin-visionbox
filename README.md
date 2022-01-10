# MetaCoin VisionBox Example
Originally forked from [truffle-box/metacoin](https://github.com/truffle-box/metacoin-box).

### Install VisionBox

If you don't have Node on your Mac/Linux computer, install it using preferably NVM. On Linux/Mac you can run

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash
```
after open a new terminal and install the version of Node you prefer, for example the stable v10:
```
nvm install lts/dubnium
```

On Windows, you can install Nvm following the instructions at  
https://github.com/coreybutler/nvm-windows

In any case, when you have Node installed, install VisionBox globally:
```
npm i -g visionbox
```

### Configure Network Information for VisionBox

Network configuration is required by VisionBox.
In our case we use Vision Quickstart for local testing, and TroGrid for as testnet. In the following example, we assume you are using VisionQuickstart as local testnet, and you connect to vpioneer testnet.

```
module.exports = {
  networks: {
    development: {
      // For visiontools/quickstart docker image
      privateKey: 'da146374a75310b9666e834ee4ad0866d6f4035967bfc76217c5a495fff9f0d0',
      consume_user_resource_percent: 0,
      fee_limit: 100000000,
      fullHost: "http://127.0.0.1:9090",
      network_id: "9090"
    },
    vpioneer: {
      // vpioneer testet
      privateKey: process.env.PRIVATE_KEY_VPIONEER,
      consume_user_resource_percent: 50,
      fee_limit: 100000000,
      fullHost: "https://vpioneer.infragrid.v.network",
      network_id: "2"
    }
  }
}
```
In order to run the dApp you don't have to change anything in the `visionbox.js` file.

### Use your own private network

`visionbox migrate` by default will use the `development` network that is set to use Vision Quickstart. In order to test the smart contracts and deploy them you must install Vision Quickstart.

1. [Install Docker](https://docs.docker.com/install/).

2. Run Vision Quickstart:
```

```

### VisionBox commands
```
visionbox compile
visionbox migrate --reset
visionbox test
```

### Run the example dApp on vpioneer

1. You need an account with some vpioneer VS. 

2. If you don't have a Vision wallet, install the Chrome Extension version of VisionLink, from https://www.visionlink.org/ and create an account.

3. Click the VisionLink extension, click on Settings and Node Manage and select vpioneer. 

4. If you don't have any vpioneer VS, open https://vpioneerfaucet.visionscan.org/ and require some vpioneer VS at the bottom of the page.

5. Add a file called `.env` in the root of this repo and edit it, adding a line with your Private Key, somethink like:
 ```
 export PRIVATE_KEY_VPIONEER=92593192a0816a4b4394b72b0d7604ec59a24d478c89cf4826503ebb31ae103e
 ```
 and save it. You can find an example in `sample-env`.
 
6. Set the dApp. The dApp needs to know the address where the MetaCoin contract has been deployed. We have put in the box a special script:

```
npm run setup-dapp
```

It will execute the migration, retrieve the contract address and save it in the file `src/js/metacoin-config.js`. This won't work if does not find the `.env` file.

7. Run the dApp:

```
npm run dev
```
It automatically will open the dApp in the default browser.


8. Enjoy your working Vision dApp!

### What else?


