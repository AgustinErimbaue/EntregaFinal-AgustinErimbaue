import React, { useState } from "react";
import "./ItemCountContainer.css";

const ItemCount = ({ initial, onAdd, stock }) => {
  const [quantity, setQuantity] = useState(parseInt(initial) || 1);

  const increment = () => {
    console.log("Increment"); 
    if (quantity < stock) {
      setQuantity(prevQuantity => prevQuantity + 1);
    }
  };

  const decrement = () => {
    console.log("Decrement"); 
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const handleOnAdd = () => {
    if (typeof onAdd === 'function') {
      onAdd(quantity);
    }
  };

  return (
    <div className="Counter">
      <div className="Controls">
        <button className="Btn" onClick={decrement}>
          -
        </button>
        <h4 className="Number">{quantity}</h4>
        <button className="Btn" onClick={increment}>
          +
        </button>
      </div>
      <div>
        <button className="Btn" onClick={handleOnAdd} disabled={!stock}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
