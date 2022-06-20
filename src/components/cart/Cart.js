import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import{ Link } from'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import { collection, doc, increment, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';
import db from '../../mock/firebaseConfig';

const Cart = () => {
  const cartContext = useContext(CartContext);

  const removeItem = (id) => {
    cartContext.removeItem(id);
  };

  const deleteCart = () => {
    cartContext.deleteCart();
  };

  //Creacion de la compra
  const purchase = () => {
    const itemsForDB = cartContext.cartList.map(item => ({
      id: item.id,
      price: item.price,
      title: item.title,
      qty: item.quantity
    }));
    let order = {
      buyer: {
        email: 'david@david.com',
        name: 'David',
        phone: '1234567',
      },
      date: serverTimestamp(),
      total: cartContext.calcTotalPurchase(),
      items: itemsForDB
    };
    console.log(order);
    const createOrderInFirestore = async() => {
      const newOrdeRef = doc(collection(db, 'orders'));
      await setDoc(newOrdeRef, order);
      return newOrdeRef;
    };
    createOrderInFirestore()
      .then(result => alert('Gracias por tu compra' + result.id))
      .catch(err => console.log(err));

    //stock
    cartContext.cartList.forEach(async (item) => {
      const itemRef = doc(db,'products',item.id);
      await updateDoc(itemRef, {stock: increment(-item.quantity)});
    });

    cartContext.deleteCart();
  };

  return (
    <>
      <div className='container m-5'>
        <h3 className='bg-light'>CARRITO DE COMPRAS</h3>
        <div className='row'>
          <div className='col-12 text-center'>
            {cartContext.cartList.length === 0 
            ? <Link to={'/'}><button className='btn btn-dark m-5'>Ir a comprar</button></Link> 
            : <button className='btn btn-danger m-5' onClick={() => deleteCart()}>Vaciar el carrito</button>
          }
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
          {
            cartContext.cartList.length === 0
            ? <h1>Tu Carrito de compras esta <span className="alert alert-secondary">Vacio</span></h1>
            : cartContext.cartList.map((item,i) =>
              <div key={item.id} className='w-100 d-flex bg-light shadow-sm text-center'>
                <div className='col-3 m-2'>
                  <p>Producto</p>
                  <img src={item.pictureUrl} className="card-img-top" alt={item.title} />
                </div>
                <div className='col-2 m-2'>
                  <p>Precio</p>
                  <p><b>${item.price}</b></p>
                </div>
                <div className='col-2 m-2'>
                  <p>Cantidad</p>
                  <p><b>{item.quantity}</b></p>
                </div>
                <div className='col-2 m-2'>
                  <p>Total</p>
                  <p><b>${<CurrencyFormat value={cartContext.calcTotalPriceItem(item)} displayType='text' thousandSeparator={true} />}</b></p>
                </div>
                <div className='col-3 m-2'>
                  <p>Eliminar</p>
                  <button className='btn btn-outline-danger' onClick={() => removeItem(item.id)}>Eliminar</button>
                </div>
              </div>)
          }
          </div>
        </div>
        {
          cartContext.cartList.length === 0
          ? null
          :<div className='row mt-5'>
          <div className='col-6 m-auto'>
            <h4>Detalles del pedido</h4>
            <hr/>
            <div className='bg-light'>
              <p className='d-flex justify-content-around'>SubTotal:{cartContext.cartList.length === 0 ? <span>0</span> : <span>{<CurrencyFormat value={cartContext.calcSubTotal()} displayType='text' thousandSeparator={true} prefix={'$'} />}</span>}</p>
              <p className='d-flex justify-content-around'>Envio Nacional:{cartContext.cartList.length === 0 ? <span>0</span> : <span>${cartContext.nationalSend}</span>}</p>
            </div>
            <hr/>
            <div  className='bg-dark text-white text-center'>
              <p>Total</p>
              <hr/>
              <p>${cartContext.cartList.length === 0 ? 0 : <span>{<CurrencyFormat value={cartContext.calcTotalPurchase()} displayType='text' thousandSeparator={true} prefix={'$'} />}</span>}</p>
            </div>
            {cartContext.cartList.length === 0 ? '' :<Link to={'/'}><button className='w-100 btn btn-outline-dark' onClick={() => purchase()}>Terminar comprar</button></Link>}
          </div>
        </div>
        }
      </div>
    </>
  )
}

export default Cart;