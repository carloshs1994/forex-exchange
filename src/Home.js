import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from 'lodash';
import { useSearchParams } from 'react-router-dom';
import {
  changeMarket,
  filterAscending,
  filterDescending,
  storeSearchValue,
} from './redux/home/home';
import Header from './components/Header';
import ListOfPriceConvertions from './components/ListOfPriceConvertions';
import './style/main.scss';
import Markets from './components/Markets';

function App() {
  const order = useSelector((state) => state.homeReducer.order);
  const market = useSelector((state) => state.homeReducer.market);
  const currentValue = useSelector((state) => state.homeReducer.searchValue);
  const dispatch = useDispatch();
  const [searchParam, setSerchParam] = useSearchParams();
  const searchValue = searchParam.get('search') || '';
  const searchMarket = searchParam.get('market') || '';

  const handleClick = () => {
    if (order === 'ascending') {
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
      <Header />
      <Markets />
      <input
        onChange={
          (event) => {
            dispatch(storeSearchValue(event.target.value));
            handleChange(event);
          }
        }
        type="text"
        value={currentValue}
      />
      <button onClick={handleClick} type="button">Sort Price</button>
      <h1>{`Sorting by ${order} order`}</h1>
      <ListOfPriceConvertions filterValue={searchValue} />
    </div>
  );
}

export default App;
