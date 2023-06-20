import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../Context/CartContext';
import cart from './assets/cart.png';
import './CartWidget.css';

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to='/cart' className='CartWidget'>
      <img className='CartImg' src={cart} alt="Cart" />
      {totalQuantity > 0 && <span className="CartCount">{totalQuantity}</span>}
    </Link>
  );
}

export default CartWidget;
