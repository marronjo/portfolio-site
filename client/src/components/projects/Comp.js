import React, { Component } from "react";
import getWeb3 from "../getWeb3.js";

const {data} = require('./var.js');
//const Web3 = require('web3')

class Comp extends Component {

    state = { 
        web3: null, 
        contract: [],
        borrow: [],
        supply: [],
        names: [], 
    };

    componentDidMount = async () => {
        try {
        // Get network provider and web3 instance.
        //const web3 = new Web3(data.infura);
        const web3 = await getWeb3();
        var contract = [];

        // Use web3 to get the user's accounts.
        //const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });



        for(let i = 0; i < data.abi.length; i++){
            contract.push(await new web3.eth.Contract(data.abi[i], data.address[i]));
        }

        // Set web3, accounts, and contract to the state, and then proceed with an
        // example of interacting with the contract's methods.
            this.setState({ web3, contract }, this.setup);
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

        var borrow = [];
        var supply = [];
        var names = [];

        //console.log(accounts[0]);

        //console.log(await contract.methods);

        // Stores a given value, 5 by default.
        //await contract.methods.set(5).send({ from: accounts[0] });

        //console.log("first one worked");

        // Get the value from the contract to prove it worked.
        for(let j = 0; j < data.abi.length; j++){
            borrow.push(await contract[j].methods.borrowRatePerBlock().call() * 100 * 365 * 4 * 60 * 24 / 1e18);
            supply.push(await contract[j].methods.supplyRatePerBlock().call());
            names.push(await contract[j].methods.name().call());
        }
        // Update state with the result.
        this.setState({ borrow, supply, names });
    };

    render() {
        if (!this.state.borrow || !this.state.supply || !this.state.names) {
        return(
            <div>
            <p>Loading Web3, accounts, and contract...</p>
            <p>Make sure you have MetaMask installed!</p>
            </div>
        );
        }
        return (
        <div className="App">
            <div>
                {this.state.names.map(data => (
                    <p>{data}</p>
                ))}
                {this.state.borrow.map(data => (
                    <p>{data}</p>
                ))}
                {this.state.supply.map(data => (
                    <p>{data}</p>
                ))}
            </div>
        </div>
        );
    }
}

export default Comp;
