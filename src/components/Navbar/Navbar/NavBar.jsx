import CartWidget from "./CartWidget/CartWidget";
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="Navbar">
      <Link to='/'>
        <h3>PhoneGear</h3>
      </Link>
      <div className="Categories">
        <NavLink to={'/category/Smartphones'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} >Celulares</NavLink>
        <NavLink to={'/category/Tablets'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} >Tablets</NavLink>
        <NavLink to={'/category/Notebooks'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} >Notebooks</NavLink>
      </div>
      <div className="CartWidgetContainer">
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;
