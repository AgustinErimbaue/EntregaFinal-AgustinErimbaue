import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../Context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import { createOrder } from '../../service/firebase/firebaseConfig';
import './Cart.css';
import OrderConfirm from '../OrderConfirm/OrderConfirm';

const Cart = () => {
  const { cart, clearCart, totalQuantity } = useContext(CartContext);
  const navigateTo = useNavigate();
  const [buyerInfo, setBuyerInfo] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [orderId, setOrderId] = useState(null);
  const [showOrderConfirm, setShowOrderConfirm] = useState(false);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleInputChange = (e) => {
    setBuyerInfo({ ...buyerInfo, [e.target.name]: e.target.value });
  };

  async function handleConfirm() {
    const order = {
      items: cart,
      buyers: buyerInfo,
      date: new Date(),
      price: totalPrice,
    };
    try {
      const id = await createOrder(order);
      console.log('respuesta', id);
      setOrderId(id);
      setShowOrderConfirm(true);
    } catch (error) {
      console.log('Error al confirmar la compra:', error);
  
    }
  }

  useEffect(() => {
    if (showOrderConfirm) {
      clearCart(); 
    }
  }, [showOrderConfirm, clearCart]);

  if (totalQuantity === 0) {
    return (
      <div className="empty-cart">
        <h1>No has agregado ningún producto al carrito</h1>
        <Link to="/" className="option-link">
          Ir a productos
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Tu carrito de compras</h2>
      <div className="cart-items">
        {cart.map((product) => (
          <CartItem key={product.id} {...product} />
        ))}
      </div>
      <div className="buyer-info">
        <h3>Información del comprador:</h3>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={buyerInfo.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Teléfono"
          value={buyerInfo.phone}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={buyerInfo.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="cart-summary">
        <h3 className="total-quantity">
          Total ({totalQuantity} {totalQuantity === 1 ? 'item' : 'items'}):
        </h3>
        <h3 className="total-price">${totalPrice.toFixed(2)}</h3>
      </div>
      <div className="cart-actions">
        <button className="clear-cart-button" onClick={() => clearCart()}>
          Limpiar carrito
        </button>
        <button className="checkout-link" onClick={handleConfirm}>
          Confirmar compra
        </button>
      </div>

      {showOrderConfirm && (
        <OrderConfirm
          orderId={orderId}
          cartLength={cart.length}
          totalPrice={totalPrice}
          buyerInfo={buyerInfo}
        />
      )}
    </div>
  );
};

export default Cart;
