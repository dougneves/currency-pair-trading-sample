import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetAccountBalance } from '../actions/trade-actions';
import AccountBalance from './account-balance';
import Trade from './trade';

class App extends Component {
  componentDidMount = () => {
    this.props.dispatch(resetAccountBalance(156.12, 0));
  };

  render = () => {
    return (
      <main>
        <AccountBalance
          usd={this.props.accountBalance.usdBalance}
          btc={this.props.accountBalance.btcBalance}
        />
        <Trade />
      </main>
    );
  };
}

export default connect(state => {
  return { accountBalance: state.accountBalance };
})(App);
