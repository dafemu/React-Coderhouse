import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import shoes from '../../mock/shoes';
import { ItemDetail } from '../itemdetail/ItemDetail';

const ItemDetailContainer = ({prop}) => {

    const [item, setItem] = useState([]);

    //como se llamo en la ruta se debe llamar en el hook
    const { id } = useParams();
    
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
        console.log("DATOS: ", datos); 
        setItem(datos.find(item => item.id === parseInt(id)));
      })
      .catch((err) => console.log(err));
    }, [id])

  return (
    <>
        <ItemDetail item={item}/>
    </>
  )
}

export default ItemDetailContainer;