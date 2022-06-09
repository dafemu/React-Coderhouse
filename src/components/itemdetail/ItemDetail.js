import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../cart/CartContext';
import { ItemCount } from '../itemcount/ItemCount';

export const ItemDetail = ({item}) => {
    let sizes = [6,7,8,9,10,11,12];
    
    const [shoesCount, setShoesCount] = useState(0);

    const contextCart = useContext(CartContext)

    //evento enviado hacia el itemcount
    const onAdd = (shoesSelected) => {
        alert('Añadiste ' + shoesSelected + ' zapatillas al carrito');
        setShoesCount(shoesSelected);

        //agregando el producto al carrito
        contextCart.addItem(item, shoesSelected);
    };
  return (
    <>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-6'>
                    <div>
                        <img style={{width: '100%'}} src={item.pictureUrl} alt={item.title} />
                    </div>
                </div>
                <div className='col-6'>
                    <h1>{item.title}</h1>
                    <h3>${item.price}</h3>
                    <p><b>Colores: </b>{item.colores}</p>
                    <p>{item.description}</p>
                    <p><b>Size US:</b></p>
                    <div className='d-flex flex-row'>{sizes.map((size,index) => {
                        return <span key={index} className='m-2' style={{width: '50px', height: '30px', backgroundColor: 'white', color: 'black', border: '2px solid black', textAlign: 'center'}}>{size}</span>
                    })}</div>
                    <p>
                        <b>Cantidad:</b>
                    </p>
                    {
                        shoesCount === 0
                        ? <ItemCount stock={5} initial={shoesCount} onAdd={onAdd}/>
                        : <Link to={'/cart'}><button className='btn btn-outline-success'>Check Out</button></Link>
                    }
                </div>
            </div>
        </div>
    </>
  )
}
