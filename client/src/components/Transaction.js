import { TableCell } from '@material-ui/core';
import React, { Component } from 'react';
import { NavBtn, NavBtnLink } from './transactionStyle';


class Transaction extends Component {

    removeTransction = () => {
        this.props.removeTransction(this.props.transactionDetails)
    }
    render() {
        return (
            <>
                <TableCell >{this.props.transactionDetails.vendor}</TableCell>
                <TableCell >{this.props.transactionDetails.category}</TableCell>
                <TableCell >{this.props.transactionDetails.amount}</TableCell>
                <TableCell >
                    <NavBtn>
                        <NavBtnLink onClick={this.removeTransction} >Delete</NavBtnLink>
                    </NavBtn>
                </TableCell>
            </>
        );
    }
}

export default Transaction;
