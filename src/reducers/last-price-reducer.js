import {
  FETCH_LAST_PRICE,
  _FULFILLED,
  _PENDING,
  _REJECTED
} from '../utils/action-types';

const DEFAULT_STATE = {
  fetching: false,
  fetched: false,
  value: 0,
  error: false,
  errorMessage: ''
};

export default function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case FETCH_LAST_PRICE + _PENDING:
      return {
        ...state,
        fetched: false,
        fetching: true
      };
    case FETCH_LAST_PRICE + _FULFILLED:
      return {
        ...state,
        fetching: false,
        fetched: true,
        value: action.payload
      };
    case FETCH_LAST_PRICE + _REJECTED:
      return {
        ...state,
        fetching: false,
        fetched: false,
        error: true,
        errorMessage: action.payload
      };
    default:
      return state;
  }
}
