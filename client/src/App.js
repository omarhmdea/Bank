import axios from 'axios';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Operation from './components/Operation';
import Breakdown from './components/Breakdown';
import Transactions from './components/Transactions';

class App extends Component {

  constructor() {
    super()
    this.state = {
      transactions: [],
      groups: []

    }
  }

  totalBalance = () => {
    return this.state.transactions.map(t => t.amount).reduce(
      (previousValue, currentValue) => previousValue + currentValue, 0
    );
  }
  addTransaction = (transaction) => {
    let transactions = this.state.transactions
    transactions.push(transaction)
    this.setState({ transactions })

    axios({
      method: 'post',
      url: 'http://localhost:3060/transaction',
      data: transaction
    }).then();
  }

  removeTransction = (transaction) => {
    let transactions = this.state.transactions
    let index = transactions.indexOf(transaction)
    transactions.splice(index, 1)
    this.setState({ transactions })

    axios({
      method: 'delete',
      url: 'http://localhost:3060/transaction',
      data: transaction
    }).then();

  }

  componentDidMount() {

    axios({
      method: 'get',
      url: 'http://localhost:3060/transactions',
    }).then(data => { this.setState({ transactions: data.data }) });
    this.totalBalance()
  }

  render() {
    return (
      <>
        <Router>
          <>
            <Navbar totalBalance={this.totalBalance}/>

            <Switch>
              <Route exact path="/transactions" render={() => <Transactions transaction={this.state.transactions} removeTransction={this.removeTransction} />} />
              <Route exact path="/operation" render={() => <Operation addTransaction={this.addTransaction} />} />
              <Route exact path="/breakdown" render={() => <Breakdown transaction={this.state.transactions} />} />

            </Switch>

          </>
        </Router>
      </>
    );
  }
}

export default App;
