import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { changeMarket } from '../redux/home/home';

const Markets = () => {
  const markets = useSelector((state) => state.homeReducer.currencies);
  const currentMarket = useSelector((state) => state.homeReducer.market);
  const [searchParam, setSerchParam] = useSearchParams();
  const searchValue = searchParam.get('search') || '';
  const dispatch = useDispatch();
  const onChangeHandler = (e) => {
    setSerchParam({
      search: searchValue,
      market: e.target.value,
    });
    dispatch(changeMarket(e.target.value));
  };

  const Options = () => markets.map(
    (currencie) => <option key={currencie} value={currencie}>{currencie}</option>,
  );

  return (
    <select onChange={onChangeHandler} value={currentMarket} name="markets" id="markets">
      <Options />
    </select>
  );
};

export default Markets;
