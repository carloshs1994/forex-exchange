import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from 'lodash';
import { useSearchParams } from 'react-router-dom';
import {
  changeMarket,
  filterAscending,
  filterDescending,
  storeCustomFilters,
  storeSearchValue,
} from './redux/home/home';
import ListOfPriceConvertions from './components/ListOfPriceConvertions';
import './style/main.scss';
import Markets from './components/Markets';

const App = () => {
  const order = useSelector((state) => state.homeReducer.order);
  const market = useSelector((state) => state.homeReducer.market);
  const currentValue = useSelector((state) => state.homeReducer.searchValue);
  const dispatch = useDispatch();
  const [searchParam, setSerchParam] = useSearchParams();
  const searchValue = searchParam.get('search') || '';
  const searchMarket = searchParam.get('market') || '';

  const handleClick = () => {
    if (order === 'ascending') {
      // there is no need to share, and/or dispath an state value,
      // mantain as an state value make it much easier to debug and understand
      dispatch(filterDescending());
    } else {
      dispatch(filterAscending());
    }
  };

  const handleChange = debounce((event) => {
    const search = event.target.value;
    if (search) {
      setSerchParam({
        search,
        market,
      });
    } else {
      setSerchParam({});
    }
  }, 200);

  //  const handleChange = debounce(({target:{value}}) => 
  //       // setSerchParam should be able to handle a request
  //       // with a search param empty (actually, thats its default value)
  //       // typing code could help to understand how reduce unnecessary sentences
  //     setSerchParam({
  //       search: value,
  //       market,
  //     })
  // , 200);

  useEffect(() => {
    if (searchMarket) {
      dispatch(changeMarket(searchMarket));
      dispatch(storeSearchValue(searchValue));
    } else {
      dispatch(changeMarket(market));
    }
  }, []);

  return (
    <div className="App">
      <div className="form">
        <input
          onChange={
            (event) => {
              dispatch(storeSearchValue(event.target.value));
              handleChange(event);
            }
          }
          type="text"
          placeholder="Filter By Name"
          value={currentValue}
        />
        <Markets />
        <button onClick={() => dispatch(storeCustomFilters(market, currentValue))} type="button">Save Current Search </button>
        <button onClick={handleClick} type="button">Sort Price</button>
        <p>{`(Sorting by ${order} order)`}</p>
      </div>
      <h2>{`1 ${market}: `}</h2>
      <ListOfPriceConvertions filterValue={searchValue} />
    </div>
  );
};

export default App;
