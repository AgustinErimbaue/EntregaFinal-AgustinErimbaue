import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

const OrderConfirm = ({ orderId, cartLength, totalPrice, buyerInfo }) => {
  useEffect(() => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Confirmación de la orden',
      html: `
        <div className="order-confirm">
          <h2>Tu orden con ID ${orderId} ha sido procesada exitosamente.</h2>
          <p>Cantidad de artículos: ${cartLength}</p>
          <p>Precio total: $${totalPrice.toFixed(2)}</p>
          <p>Comprador: ${buyerInfo.name}</p>
          <p>Teléfono: ${buyerInfo.phone}</p>
          <p>Email: ${buyerInfo.email}</p>
        </div>
      `,
      showConfirmButton: false,
      timer: 5000
    });
  }, [orderId, cartLength, totalPrice, buyerInfo]);

  return null;
};

export default OrderConfirm;
