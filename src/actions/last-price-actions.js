import axios from 'axios';
import {
  FETCH_LAST_PRICE,
  _FULFILLED,
  _PENDING,
  _REJECTED
} from '../utils/action-types';

export function fetchLastPrice() {
  return dispatch => {
    dispatch({ type: FETCH_LAST_PRICE + _PENDING });

    axios
      .get('/api/last_price')
      .then(result => {
        if (
          !result ||
          !result.data ||
          (!result.data.last_price && !result.data.message)
        )
          return dispatch({
            type: FETCH_LAST_PRICE + _REJECTED,
            payload: 'Unknow Network Error. Please try again in a few seconds.'
          });
        if (result.data.message)
          return dispatch({
            type: FETCH_LAST_PRICE + _REJECTED,
            payload: result.data.message
          });
        return dispatch({
          type: FETCH_LAST_PRICE + _FULFILLED,
          payload: result.data.last_price
        });
      })
      .catch(ex =>
        dispatch({
          type: FETCH_LAST_PRICE + _REJECTED,
          payload: ex.message
        })
      );
  };
}
