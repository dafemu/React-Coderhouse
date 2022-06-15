import React, { useState, useEffect } from 'react'
import ItemList from '../itemlist/ItemList'
import { ItemCount } from '../itemcount/ItemCount';
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
    .then(shoes => setDatos(shoes))
    .catch(err => console.log(err));
  }, [datos])

  //componentWillUnmount
  useEffect(() => {
    return (() => {
      setDatos([]);
    })
  }, [])

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