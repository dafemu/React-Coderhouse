import React, { useState } from 'react'

export const ItemCount = ({stock, initial}) => {
    const [itemCount, setItemCount] = useState(initial);

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
            <button className='btn btn-outline-primary' onClick={addCart}>Agregar al carrito</button>
        </div>
    </>
  )
}
