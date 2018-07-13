import React, { Component } from 'react';

class Trade extends Component {
  render = () => (
    <section>
      <form>
        <h2>Trade</h2>
        <div>
          <input disabled value="USD" />
        </div>
        <div>
          <input placeholder="Enter your amount" name="amountUSD" />
        </div>
        <h2>For</h2>
        <div>
          <input disabled value="BTC" />
        </div>
        <div>
          <input disabled placeholder="Quote" name="amountBTC" />
        </div>
        <div>
          <button>Trade</button>
        </div>
      </form>
    </section>
  );
}

export default Trade;
