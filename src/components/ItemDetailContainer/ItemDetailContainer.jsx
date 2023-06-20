import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail.jsx';
import { getItemData } from '../../service/firebase/firebaseConfig';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const { itemId } = useParams();



  useEffect(() => {
    getItemData
      (itemId)
      .then(response => {
        setProduct(response);
      })
      .catch(error => {
        console.error(error);
      });
  }, [itemId]);

  return (
    <div className='ItemDetailContainer'>
      {product && <ItemDetail {...product} />}
    </div>
  );
};

export default ItemDetailContainer;
