import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { resetHomePage } from '../redux/home/home';

const Header = () => {
  const dispatch = useDispatch();
  return (
    <header>
      <NavLink onClick={() => dispatch(resetHomePage())} to="/forex-exchange"><h1>Forex Exchange</h1></NavLink>
      <NavLink to="/forex-exchange/filters">Filters</NavLink>
    </header>
  );
};

export default Header;
