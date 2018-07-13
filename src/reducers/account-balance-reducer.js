import {
  CHANGE_ACCOUNT_BALANCE,
  RESET_ACCOUNT_BALANCE
} from '../utils/action-types';

const DEFAULT_STATE = {
  usdBalance: 0,
  btcBalance: 0
};

export default function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case CHANGE_ACCOUNT_BALANCE:
      return {
        ...state,
        usdBalance: state.usdBalance + action.payload.usd,
        btcBalance: state.btcBalance + action.payload.btc
      };
    case RESET_ACCOUNT_BALANCE:
      return {
        ...state,
        usdBalance: action.payload.usd,
        btcBalance: action.payload.btc
      };
    default:
      return state;
  }
}
