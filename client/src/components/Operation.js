import { Button, TextField } from '@material-ui/core';
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class Operation extends Component {
    constructor() {
        super()
        this.state = {
            lastTransaction: {
            }
        }
    }
    updateAmount = (e) => {
        let lastTransaction = { ...this.state.lastTransaction }
        lastTransaction.id = uuidv4()
        lastTransaction.amount = parseInt(e.target.value)
        this.setState({ lastTransaction })
    }
    updateVendor = (e) => {
        let lastTransaction = { ...this.state.lastTransaction }
        lastTransaction.vendor = e.target.value
        this.setState({ lastTransaction })

    }
    updateCategory = (e) => {
        let lastTransaction = { ...this.state.lastTransaction }
        lastTransaction.category = e.target.value
        this.setState({ lastTransaction })

    }
    addTransaction = (e) => {
        if (e.target.innerHTML === "Withdraw") {
            let lastTransaction = { ...this.state.lastTransaction }
            lastTransaction.amount = -lastTransaction.amount
            this.props.addTransaction(lastTransaction)
        } else {
            this.props.addTransaction(this.state.lastTransaction)
        }
    }
    render() {
        return (
            <>
                <form>
                    <TextField
                        style={{ width: "200px", margin: "5px" }}
                        type="text"
                        label="Amount"
                        variant="outlined"
                        onChange={this.updateAmount}
                    />
                    <br />
                    <TextField
                        style={{ width: "200px", margin: "5px" }}
                        type="text"
                        label="Vendor"
                        variant="outlined"
                        onChange={this.updateVendor}
                    />
                    <br />
                    <TextField
                        style={{ width: "200px", margin: "5px" }}
                        type="text"
                        label="Category"
                        variant="outlined"
                        onChange={this.updateCategory}
                    />
                    <br />
                    <Button variant="contained" color="primary" onClick={this.addTransaction} style={{ margin: "5px" }}>
                        Deposit
                    </Button>
                    <Button variant="contained" color="primary" onClick={this.addTransaction}>
                        Withdraw
                    </Button>
                    
                </form>
            </>
        );
    }
}

export default Operation;
