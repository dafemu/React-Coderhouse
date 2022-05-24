import React, { useState, useEffect } from 'react'
import ItemList from '../itemlist/ItemList'
import shoes from '../../mock/shoes';
import { ItemCount } from '../itemcount/ItemCount';

export const ItemListContainer = ({greeting}) => {
  const [datos, setDatos] = useState([]);

  let funcionPromise = (array) => {
    return array
  }

  let promesa = (time, task) => {
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
    promesa(2000, funcionPromise(shoes))
    .then((datos) => { 
      console.log("datos: ", datos);
      setDatos(datos);
    })
    .catch((err) => console.log(err));
  }, [])

  return (
    <>
      <div>{greeting} component ItemListContainer</div>
      <ItemList items={datos}/>
      <ItemCount stock={5} initial={1} />
    </>
  )
}
