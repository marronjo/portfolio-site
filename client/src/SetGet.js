import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./getWeb3";

import "./SetGet.css";

class SetGet extends Component {
  state = { 
    storageValue: 0, 
    web3: null, 
    accounts: null, 
    contract: null, 
    update: 0, 
    recent: null, 
    time: null, 
    block: null,
    link: "",
  };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleStorageContract.networks[networkId];
      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
        this.setState({ web3, accounts, contract: instance }, this.setup);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  setup = async () => {
    const { contract } = this.state;

    //console.log(accounts[0]);

    //console.log(await contract.methods);

    // Stores a given value, 5 by default.
    //await contract.methods.set(5).send({ from: accounts[0] });

    //console.log("first one worked");

    // Get the value from the contract to prove it worked.
    const response = await contract.methods.getData().call();
    const recent = await contract.methods.getAddress().call();
    const time = await contract.methods.getTime().call();
    const block = await contract.methods.getBlock().call();

    console.log(response);

    const link = "https://ropsten.etherscan.io/address/" + recent;

    // Update state with the result.
    this.setState({ storageValue: response , recent, time, block, link });
  };

  update = async () => {
    console.log("clicked");
    const { accounts, contract } = this.state;

    // Stores a given value, 5 by default.
    await contract.methods.set(this.state.update).send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    const response = await contract.methods.getData().call();
    const recent = await contract.methods.getAddress().call();
    const time = await contract.methods.getTime().call();
    const block = await contract.methods.getBlock().call();

    console.log(recent + " " + time + " " + block);

    // Update state with the result.
    this.setState({ storageValue: response, recent, time, block  }); 
  };

  handleInput = event => {
    this.setState({ update: event.target.value });
  }

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <h3>First Full Stack Truffle App</h3>
        <div>
          <h4>Enter a number into the box below and hit submit! Then confirm on MetaMask</h4>
        </div>
        <div>
          <p>Latest user: {this.state.recent !== null ? this.state.recent : 0}</p>
          <p>Timestamp: {this.state.time !== null ? this.state.time : 0}</p>
          <p>Block Number: {this.state.block !== null ? this.state.block : 0}</p>
          <a href={this.state.link}>View User Here</a>
        </div>
        <div className="value">The stored value is:  {this.state.storageValue !== null ? this.state.storageValue : 0}</div>
        <div>
          <input className="input" onChange={this.handleInput} placeholder="Enter Number"/>
          <button onClick={this.update} className="button button1">Submit</button>
        </div>
      </div>
    );
  }
}

export default SetGet;
