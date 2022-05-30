import React, { useState, useEffect } from 'react';
import shoes from '../../mock/shoes';
import { ItemDetail } from '../itemdetail/ItemDetail';

const ItemDetailContainer = ({prop}) => {

    const [item, setItem] = useState([]);
    
    let funcionPromise = (array) => {
      return array
    }
  
    let getItem = (time, task) => {
        return new Promise((resolve, reject) => {
            if (true) {
                setTimeout(() => {
                  resolve(task)
                }, time);
            } else {
                reject("Error");
            }
        });
    }
  
    useEffect(() => {
      getItem(2000, funcionPromise(shoes))
      .then((datos) => { 
        setItem(datos[8]);
      })
      .catch((err) => console.log(err));
    }, [])

  return (
    <>
        <ItemDetail item={item}/>
    </>
  )
}

export default ItemDetailContainer;