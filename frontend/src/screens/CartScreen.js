import React from 'react';

export default function CartScreen(props) {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;
  return (
    <div>
      <h1>Carrito de compras</h1>
      <p>
        Añadir al carrito: Producto Id: {productId} cantidad: {qty}
      </p>
    </div>
  );
}