import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLastPrice } from '../actions/last-price-actions';
import { tradeUSDtoBTC } from '../actions/trade-actions';
import { USDtoBTC, currencyFormatter } from '../utils/tools';

class Trade extends Component {
  state = {
    amountUSD: ''
  };

  componentDidMount = () => {
    //update Last Price on first mount
    this.updateLastPrice();

    //update Last Price each 5 minutes
    setInterval(this.updateLastPrice, 1000 * 60 * 5);
  };

  updateLastPrice = () => {
    this.props.dispatch(fetchLastPrice());
  };

  onAmountUSDChanged = event => {
    const { value } = event.target;
    this.setState({
      amountUSD: value
    });
  };
  onAmountUSDBlur = () => {
    this.setState({
      amountUSD: currencyFormatter(this.state.amountUSD, 2)
    });
  };
  tradeButtonClicked = event => {
    event.preventDefault();
    if (this.props.accountBalance.usdBalance >= this.state.amountUSD) {
      this.props.dispatch(
        tradeUSDtoBTC(this.state.amountUSD, this.props.lastPrice.value)
      );
    } else {
      window.alert(
        `You don't have $${
          this.state.amountUSD
        } in your account at the moment. Please review your USD amount to trade.`
      );
    }
  };

  render = () => (
    <section>
      <form>
        <h2>Trade</h2>
        <div>
          <input disabled value="USD" />
        </div>
        <div>
          <input
            placeholder="Enter your amount"
            name="amountUSD"
            value={this.state.amountUSD}
            onChange={this.onAmountUSDChanged}
            onBlur={this.onAmountUSDBlur}
            disabled={this.props.lastPrice.fetching}
          />
        </div>
        <h2>For</h2>
        <div>
          <input disabled value="BTC" />
        </div>
        <div>
          <input
            disabled
            name="amountBTC"
            value={currencyFormatter(
              USDtoBTC(this.state.amountUSD, this.props.lastPrice.value),
              8
            )}
          />
        </div>
        <div>
          <button
            disabled={this.props.lastPrice.fetching}
            onClick={this.tradeButtonClicked}
            className="btn"
          >
            Trade
          </button>
        </div>
      </form>
    </section>
  );
}

export default connect(state => {
  return { lastPrice: state.lastPrice, accountBalance: state.accountBalance };
})(Trade);
