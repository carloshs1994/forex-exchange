import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const ListOfPriceConvertions = ({ filterValue }) => {
  const objectFromStore = useSelector((state) => state.homeReducer.rates);
  const order = useSelector((state) => state.homeReducer.order);

  const originalList = Object.entries(objectFromStore);
  const filterByKeyList = originalList.filter(
    (pair) => pair[0].includes(filterValue.toUpperCase()),
  );
  const arrForRender = (filterValue === '') ? originalList : filterByKeyList;

  const Currencies = () => (arrForRender
    .sort((a, b) => {
       // Object dataStructure could make easier to manage stored values:
    //{
    //   currency: 'USD',
    //   value: 1.12,
    // }

    // If order is ascending, we sort by value
    //if (order === 'ascending') return a.value - b.value
      if (order === 'ascending') return a[1] - b[1];
      return b[1] - a[1];
    })
    .map(([currencie, value]) => <li key={currencie}>{`to ${value} ${currencie}`}</li>));

  return (
      // non required nested item

      <ul>
        {(arrForRender.length === 0) ? <li style={{ background: 'green' }}>No matchs</li> : <Currencies />}
      </ul>
  );
};
ListOfPriceConvertions.propTypes = {
  filterValue: PropTypes.string.isRequired,
};

export default ListOfPriceConvertions;
