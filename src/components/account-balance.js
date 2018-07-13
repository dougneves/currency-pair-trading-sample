import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetAccountBalance } from '../actions/trade-actions';

class AccountBalance extends Component {
  componentDidMount = () => {
    this.props.dispatch(resetAccountBalance(156.12, 0));
  };

  render = () => (
    <section>
      <h1>Account Balance</h1>
      <div>
        <span>USD:</span> ${this.props.accountBalance.usdBalance}
      </div>
      <div>
        <span>BTC:</span> {this.props.accountBalance.btcBalance}
      </div>
    </section>
  );
}

export default connect(state => {
  return { accountBalance: state.accountBalance };
})(AccountBalance);
