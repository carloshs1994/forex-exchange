import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Filters = () => {
  const filters = useSelector((state) => state.homeReducer.customFilters);

  const Links = () => filters.map(({ searchValue, market }) => (
    <Link key={`custom-filter${searchValue + market}`} to={`/forex-exchange?search=${searchValue}&market=${market}`}>
      {`Searching for '${searchValue.toUpperCase()}' in '${market}' market`}
    </Link>
  ));

  return (
    <div className="filters">
      <h1>Your Custom Filters</h1>
      {(filters.length === 0) ? <h2>No filters yet</h2> : <Links />}
    </div>
  );
};

export default Filters;
