import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../data/mobile';
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail.jsx';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const { itemId } = useParams();

  useEffect(() => {
    getProductById(itemId)
      .then(response => {
        setProduct(response);
      })
      .catch(error => {
        console.error(error);
      });
  }, [itemId]);
  

  return (
    <div className='ItemDetailContainer'>
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;