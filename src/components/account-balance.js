import React from 'react';
import { currencyFormatter } from '../utils/tools';

const AccountBalance = props => (
  <section>
    <h1>Account Balance</h1>
    <div>
      <span>USD:</span> ${currencyFormatter(props.usd, 2)}
    </div>
    <div>
      <span>BTC:</span> {currencyFormatter(props.btc, 8)}
    </div>
  </section>
);

export default AccountBalance;
