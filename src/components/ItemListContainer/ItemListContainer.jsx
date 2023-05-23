import React, { useState, useEffect } from 'react';
import { getProducts, getProductByCategory } from "../data/mobile";
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import Item from '../Item/Item'; // Asegúrate de importar el componente Item

const ItemListContainer = ({ greeting }) => {
  const [mobilePhones, setMobilePhones] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunc = categoryId ? getProductByCategory : getProducts;

    asyncFunc(categoryId)
      .then(response => {
        setMobilePhones(response);
      })
      .catch(error => {
        console.error(error);
      });
  }, [categoryId]);

  return (
    <div className="item-list-container">
      <h1>{greeting}</h1>
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
    </div>
  );
};

export default ItemListContainer;
