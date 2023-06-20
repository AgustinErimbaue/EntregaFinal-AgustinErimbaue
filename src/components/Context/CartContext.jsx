import React, { useState, useEffect, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const itemWithQuantity = { ...item, quantity };
    setCart((prevCart) => [...prevCart, itemWithQuantity]);
  };

  const removeItem = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((item) => item.id === itemId);
  };

  useEffect(() => {
    console.log('Cart:', cart);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        isInCart,
        totalQuantity: cart.reduce((total, item) => total + item.quantity, 0),
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
