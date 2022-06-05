import React, { useState } from 'react'

export const ItemCount = ({stock, initial, onAdd}) => {
    const [itemCount, setItemCount] = useState(initial);
    console.log("itemcount shoe:", itemCount);

    const addCart = () => {
        if(itemCount < stock){
            setItemCount(itemCount + 1);
        }else{
            return;
        }
    };

    const subTractCart = () => {
        if(itemCount > 0){
            setItemCount(itemCount - 1);
        }
    };

  return (
    <>
        <div className='d-flex align-items-center'>
            <button className='btn m-2' onClick={subTractCart}>-</button>
            <p className='form-label'>{itemCount}</p>
            <button className='btn m-1' onClick={addCart}>+</button>
            {/* boton de agregar que ejecutara la funcion de onAdd enviada desde otro componente*/}
            <button className='btn btn-outline-primary' onClick={() => onAdd(itemCount)}>Agregar al carrito</button>
        </div>
    </>
  )
}
