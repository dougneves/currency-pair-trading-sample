import { combineReducers } from 'redux';
import accountBalance from './account-balance-reducer';
import lastPrice from './last-price-reducer';

export default combineReducers({
  accountBalance,
  lastPrice
});
