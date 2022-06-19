import React, { Component } from 'react';
import Transaction from './Transaction';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@material-ui/core';


class Transactions extends Component {

    removeTransction = (transaction) => {
        this.props.removeTransction(transaction)
    }

    render() {
        return (
            <TableContainer className='tableContainer' >
                <Table >
                    <TableHead className='tableHeaderCell'>
                        <TableRow>
                            <TableCell >Vendor</TableCell>
                            <TableCell >Category</TableCell>
                            <TableCell >Amount</TableCell>
                            <TableCell >Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.transaction.map((row) => (
                            <TableRow key={row.name}>
                                <Transaction
                                    transactionDetails={row}
                                    removeTransction={this.removeTransction}
                                />
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}

export default Transactions;
