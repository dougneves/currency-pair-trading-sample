import {
  FETCH_LAST_PRICE,
  _FULFILLED,
  _PENDING,
  _REJECTED
} from '../utils/action-types';

export function fetchLastPrice() {
  return dispatch => {
    dispatch({ type: FETCH_LAST_PRICE + _PENDING });

    //wait 2 seconds to emulate a network fetch
    setTimeout(() => {
      dispatch({
        type: FETCH_LAST_PRICE + _FULFILLED,
        payload: 6238.32
      });
    }, 2000);
  };
}
