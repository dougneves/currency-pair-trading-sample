import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetAccountBalance } from '../actions/trade-actions';
import { currencyFormatter } from '../utils/tools';

class AccountBalance extends Component {
  componentDidMount = () => {
    this.props.dispatch(resetAccountBalance(156.12, 0));
  };

  render = () => (
    <section>
      <h1>Account Balance</h1>
      <div>
        <span>USD:</span> ${currencyFormatter(
          this.props.accountBalance.usdBalance,
          2
        )}
      </div>
      <div>
        <span>BTC:</span>{' '}
        {currencyFormatter(this.props.accountBalance.btcBalance, 8)}
      </div>
    </section>
  );
}

export default connect(state => {
  return { accountBalance: state.accountBalance };
})(AccountBalance);
