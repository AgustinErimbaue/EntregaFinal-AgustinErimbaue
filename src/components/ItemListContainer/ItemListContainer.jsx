import React, { useState, useEffect } from 'react';
import { getProducts, getProductByCategory } from "../data/mobile";
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';

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
      <ItemList mobilePhones={mobilePhones} />
    </div>
  );
};

export default ItemListContainer;
