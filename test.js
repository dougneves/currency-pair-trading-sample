import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AccountBalance from './src/components/account-balance';

Enzyme.configure({ adapter: new Adapter() });

describe('<AccountBalance />', () => {
  it('renders one `section`', () => {
    const wrapper = shallow(<AccountBalance usd="0" btc="0" />);
    expect(wrapper.find('section')).to.have.length(1);
  });
  it('renders correct USD formatted value for 2', () => {
    const wrapper = shallow(<AccountBalance usd="2" btc="0.2323" />);
    expect(wrapper.contains('2.00')).to.equal(true);
  });
  it('renders correct USD formatted value for 0', () => {
    const wrapper = shallow(<AccountBalance usd="0" btc="0.2323" />);
    expect(wrapper.contains('0.00')).to.equal(true);
  });
  it('renders correct BTC formatted value for 0.2323', () => {
    const wrapper = shallow(<AccountBalance usd="0" btc="0.2323" />);
    expect(wrapper.contains('0.23230000')).to.equal(true);
  });
  it('renders correct USD formatted value for 0', () => {
    const wrapper = shallow(<AccountBalance usd="0" btc="0" />);
    expect(wrapper.contains('0.00000000')).to.equal(true);
  });
});
