import {
  CHANGE_ACCOUNT_BALANCE,
  RESET_ACCOUNT_BALANCE
} from '../utils/action-types';
import { USDtoBTC } from '../utils/tools';

export const tradeUSDtoBTCAction = (usdValue, lastPrice) => {
  return {
    type: CHANGE_ACCOUNT_BALANCE,
    payload: {
      usd: -usdValue,
      btc: USDtoBTC(usdValue, lastPrice)
    }
  };
};

export const resetAccountBalance = (usd, btc) => {
  return {
    type: RESET_ACCOUNT_BALANCE,
    payload: { usd, btc }
  };
};
