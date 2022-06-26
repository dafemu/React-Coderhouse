import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../cart/CartContext';
import { collection, doc, increment, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';
import db from '../../mock/firebaseConfig';

const Checkout = () => {
    const [data, setData] = useState({});
    const [orderId, setOrdeId] = useState(false);

    const cartContext = useContext(CartContext);

    const navegar = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    }

    //Creacion de la compra
  const purchase = (event) => {
    event.preventDefault();
    const itemsForDB = cartContext.cartList.map(item => ({
      id: item.id,
      price: item.price,
      title: item.title,
      qty: item.quantity
    }));
    let order = {
      buyer: data,
      date: serverTimestamp(),
      total: cartContext.calcTotalPurchase(),
      items: itemsForDB
    };
    const createOrderInFirestore = async() => {
      const newOrdeRef = doc(collection(db, 'orders'));
      await setDoc(newOrdeRef, order);
      return newOrdeRef;
    };
    createOrderInFirestore()
      .then(result => setOrdeId(result.id))
      .catch(err => console.log(err));

    //stock
    cartContext.cartList.forEach(async (item) => {
      const itemRef = doc(db,'products',item.id);
      await updateDoc(itemRef, {stock: increment(-item.quantity)});
    });

    cartContext.deleteCart();
  };

  return (
    <div className="m-auto w-50 mt-2">
            {!orderId
            ?<form onSubmit={purchase}>
                <h1>Checkout</h1>
                <div className='mb-3'>
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input className="form-control" id="nombre" required type="text" name="name" placeholder="Nombre" onChange={handleChange}/>
                </div>

                <div className='mb-3'>
                    <label htmlFor="email" className="form-label">Email</label>
                    <input className="form-control" id="email" required type="email" name="email" placeholder="Email" onChange={handleChange}/>
                </div>

                <div className='mb-3'>
                    <label htmlFor="phone" className="form-label">Telefono</label>
                    <input className="form-control" id="phone" required type="phone" name="phone" placeholder="Telefono" onChange={handleChange}/>
                </div>

                <div className='mb-3'>
                    <input className='btn btn-dark' type="submit" value="Finalizar compra"/>
                </div>
            </form>
            :<>
                <div className="m-auto w-75 mt-4 p-4 border border-3 border-success rounded">
                    <h3 className='mb-3'>Muchas gracias por tu compra!</h3>
                    <p className='mb-3 alert alert-success'>Tu orden es: {orderId}</p>
                    <button className='btn btn-outline-success' onClick={()=>navegar('/')}>Volver</button>
                </div>
            </>}
        </div>
  )
}

export default Checkout;