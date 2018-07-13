import React, { Component } from 'react';

class Trade extends Component {
  state = {
    amountUSD: '',
    amountBTC: 0
  };

  onAmountUSDChanged = event => {
    const { value } = event.target;
    this.setState({
      amountUSD: value,
      amountBTC: value / this.props.USDBTCPrice
    });
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
          />
        </div>
        <h2>For</h2>
        <div>
          <input disabled value="BTC" />
        </div>
        <div>
          <input disabled name="amountBTC" value={this.state.amountBTC} />
        </div>
        <div>
          <button>Trade</button>
        </div>
      </form>
    </section>
  );
}

export default Trade;
