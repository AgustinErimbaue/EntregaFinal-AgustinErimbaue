import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { getCategoryData, getData } from '../../service/firebase/firebaseConfig';
import './ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {
  const [mobilePhones, setMobilePhones] = useState([]);
  const { categoryId } = useParams();

  const fetchData = categoryId ? getCategoryData : getData;

  useEffect(() => {
    fetchData(categoryId)
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
