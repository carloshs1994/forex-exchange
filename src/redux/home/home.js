import axios from 'axios';

const STORE_CURRENCIES = 'forex-exchange/homeReducer/STORE_CURRENCIES';
const FILTER_ASCENDING = 'forex-exchange/homeReducer/FILTER_ASCENDING';
const FILTER_DESCENDING = 'forex-exchange/homeReducer/FILTER_DESCENDING';
const STORE_SEARCH_VALUE = 'forex-exchange/homeReducer/STORE_SEARCH_VALUE';

const initialState = {
  rates: {},
  currencies: [],
  order: 'ascending',
  market: 'MXN',
  searchValue: '',
};

const storeCurrencies = (payload, market) => ({
  type: STORE_CURRENCIES,
  payload,
  market,
});

export const storeSearchValue = (payload) => ({
  type: STORE_SEARCH_VALUE,
  payload,
});

export const filterAscending = () => ({
  type: FILTER_ASCENDING,
});

export const filterDescending = () => ({
  type: FILTER_DESCENDING,
});

export const changeMarket = (market) => async (dispatch) => {
  const response = await axios.get(`https://open.er-api.com/v6/latest/${market}`);
  dispatch(storeCurrencies(response.data.rates, market));
};

const reducer = (state = initialState, { type, payload, market }) => {
  switch (type) {
    case STORE_CURRENCIES:
      return {
        ...state,
        rates: payload,
        currencies: Object.keys(payload),
        market,
      };
    case FILTER_ASCENDING:
      return {
        ...state,
        order: 'ascending',
      };
    case FILTER_DESCENDING:
      return {
        ...state,
        order: 'descending',
      };
    case STORE_SEARCH_VALUE:
      return {
        ...state,
        searchValue: payload,
      };
    default:
      return state;
  }
};

export default reducer;
