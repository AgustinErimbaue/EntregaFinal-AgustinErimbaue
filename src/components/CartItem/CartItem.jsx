import React from 'react';
import './CartItem.css';

const CartItem = ({ id, title, price, quantity }) => {
  console.log('price:', price);
  console.log('quantity:', quantity);

  return (
    <div className="CartItem">
      <div className="CartItem__details">
        <h4 className="CartItem__title">{title}</h4>
        <p className="CartItem__price">Precio: ${price}</p>
        <p className="CartItem__quantity">Cantidad: {quantity}</p>
      </div>
    </div>
  );
};

export default CartItem;
