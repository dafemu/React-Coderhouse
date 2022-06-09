import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
  const cartContext = useContext(CartContext);
  console.log('cartcontex list: ', cartContext.cartList);

  const removeItem = (id) => {
    cartContext.removeItem(id);
  };

  const deleteCart = () => {
    cartContext.deleteCart();
  };

  return (
    <>
      <div className='container m-5'>
        <div className='row'>
          <div className='col-12'>
            <button className='btn btn-danger m-5' onClick={() => deleteCart()}>Vaciar el carrito</button>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
          {
            cartContext.cartList.length === 0
            ? <p>Tu carrito esta vacio</p>
            : cartContext.cartList.map((item,i) =>
                <div key={i} className="card" style={{width: '18rem'}}>
                  <img src={item.pictureUrl} className="card-img-top" alt={item.title} />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p>Cantidad : {item.quantity}</p>
                    <button className='btn btn-outline-danger' onClick={() => removeItem(item.id)}>Eliminar</button>
                  </div>
                </div>)
          }
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart;