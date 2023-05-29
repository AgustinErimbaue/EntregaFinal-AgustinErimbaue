import React from 'react';
import { Link } from 'react-router-dom';

const ItemList = ({ mobilePhones }) => {
  return (
    <div className="mobiles-container">
      {mobilePhones.map(product => (
        <Item
          key={product.id}
          id={product.id}
          title={product.title}
          img={product.img}
          category={product.category}
          description={product.description}
          price={product.price}
          stock={product.stock}
        />
      ))}
    </div>
  );
};

export default ItemList;
