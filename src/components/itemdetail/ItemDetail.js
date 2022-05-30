import React from 'react'
import { ItemCount } from '../itemcount/ItemCount';

export const ItemDetail = ({item}) => {
    let sizes = [6,7,8,9,10,11,12];
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
                    <p><b>Size US:</b><div className='d-flex flex-row'>{sizes.map(size => {
                        return <span className='m-2' style={{width: '50px', height: '30px', backgroundColor: 'white', color: 'black', border: '2px solid black', textAlign: 'center'}}>{size}</span>
                    })}</div></p>
                    <p><b>Cantidad:</b><ItemCount stock={5} initial={1}/></p>
                </div>
            </div>
        </div>
    </>
  )
}
