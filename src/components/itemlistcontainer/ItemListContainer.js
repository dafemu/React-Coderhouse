import React, { useState, useEffect } from 'react'
import ItemList from '../itemlist/ItemList'
import { useParams } from 'react-router-dom';

//firebase imports
import db from '../../mock/firebaseConfig';
import { collection, getDocs } from "firebase/firestore";

const ItemListContainer = ({greeting}) => {
  const [datos, setDatos] = useState([]);

  const { id } = useParams();

  //componentDidUpdate
  useEffect(() => {
    const firebaseFetch = async() =>{
      const querySnapshot = await getDocs(collection(db, "products"));
      const dataFromFirestore = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
      return dataFromFirestore;
    }
    firebaseFetch()
    .then(shoes => setDatos(id === undefined ? shoes : shoes.filter(product => product.categoryId === id)))
    .catch(err => console.log(err));
  }, [datos, id])

  //componentWillUnmount
  useEffect(() => {
    return (() => {
      setDatos([]);
    })
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