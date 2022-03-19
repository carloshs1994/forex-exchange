import axios from 'axios';

const STORE_CURRENCIES = 'forex-exchange/homeReducer/STORE_CURRENCIES';
const FILTER_ASCENDING = 'forex-exchange/homeReducer/FILTER_ASCENDING';
const FILTER_DESCENDING = 'forex-exchange/homeReducer/FILTER_DESCENDING';
const STORE_SEARCH_VALUE = 'forex-exchange/homeReducer/STORE_SEARCH_VALUE';
const STORE_CUSTOM_FILTERS = 'forex-exchange/homeReducer/STORE_CUSTOM_FILTERS';
const RESET_HOME_PAGE = 'forex-exchange/homeReducer/RESET_HOME_PAGE';

const initialState = {
  rates: {},
  currencies: [],
  order: 'ascending',
  market: 'MXN',
  searchValue: '',
  customFilters: [],
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

export const storeCustomFilters = (market, searchValue) => ({
  type: STORE_CUSTOM_FILTERS,
  payload: {
    market,
    searchValue,
  },
});

export const changeMarket = (market) => async (dispatch) => {
  const response = await axios.get(`https://open.er-api.com/v6/latest/${market}`);
  dispatch(storeCurrencies(response.data.rates, market));
};

export const resetHomePage = () => ({
  type: RESET_HOME_PAGE,
});

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
    case STORE_CUSTOM_FILTERS:
      return {
        ...state,
        customFilters: [...state.customFilters, payload],
      };
    case RESET_HOME_PAGE:
      return {
        ...state,
        order: 'ascending',
        market: 'MXN',
        searchValue: '',
        customFilters: [],
      };
    default:
      return state;
  }
};

export default reducer;
