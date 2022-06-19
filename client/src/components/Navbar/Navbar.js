import React, { Component } from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
  BalanceAmount,
  BalanceBox
} from './NavbarElements';


class Navbar extends Component {

  totalBalance = () => {
    return this.props.totalBalance()
  }

  render() {
    return (
      <>
        <Nav>
          <NavMenu>
            <NavLink to='/transactions' activeStyle>
              Transactions
            </NavLink>
            <NavLink to='/operation' activeStyle>
              Operation
            </NavLink>
            <NavLink to='/breakdown' activeStyle>
              Breakdown
            </NavLink>
          </NavMenu>
          <BalanceBox>
            <BalanceAmount
              style={{
                backgroundColor:
                  ((this.totalBalance() >= 0 && "green") ||
                    (this.totalBalance() < 0 && "red"))
              }}
            >{this.totalBalance()} ₪</BalanceAmount>
          </BalanceBox>
        </Nav>
      </>
    );
  }
}

export default Navbar;
