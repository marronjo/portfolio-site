import Web3 from "web3";
import detectEthereumProvider from '@metamask/detect-provider';

const getWeb3 = () =>
  new Promise((resolve, reject) => {
    // Wait for loading completion to avoid race conditions with web3 injection timing.
    window.addEventListener("load", async () => {

      const provider = await detectEthereumProvider();
      const web3 = new Web3(provider);

      if(!provider) {
        console.log("Error loading metamask!!");
        reject(web3);
      } else {
          //const address = await ConnectWallet();
          //console.log(address);
          resolve(web3);
      }
      // Legacy dapp browsers...
      /*else if (window.web3) {
        // Use Mist/MetaMask's provider.
        const web3 = window.web3;
        console.log("Injected web3 detected.");
        resolve(web3);
      }
      // Fallback to localhost; use dev console port by default...
      else {
        const provider = new Web3.providers.HttpProvider(
          "http://127.0.0.1:8545"
        );
        const web3 = new Web3(provider);
        console.log("No web3 instance injected, using Local web3.");
        resolve(web3);
      }*/
    });
  });

export default getWeb3;
