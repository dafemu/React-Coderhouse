import React, { useState, useEffect } from 'react'
import ItemList from '../itemlist/ItemList'
import shoes from '../../mock/shoes';
import { ItemCount } from '../itemcount/ItemCount';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting}) => {
  const [datos, setDatos] = useState([]);

  const { id } = useParams();

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
      setDatos(id === undefined ?datos : datos.filter(product => product.categoryId === id));
    })
    .catch((err) => console.log(err));
  }, [id])

  return (
    <>
      <div>
        <h2>{greeting}</h2>
      </div>
      <ItemList items={datos}/>
    </>
  )
}

export default ItemListContainer;