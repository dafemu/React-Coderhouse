import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { ItemDetail } from '../itemdetail/ItemDetail';
import { doc, onSnapshot } from "firebase/firestore";
import db from '../../mock/firebaseConfig';

const ItemDetailContainer = ({prop}) => {

    const [item, setItem] = useState([]);

    //como se llamo en la ruta se debe llamar en el hook
    const { id } = useParams();

    useEffect(() => {
      onSnapshot(doc(db, "products", id), (doc) => {
        console.log("Current data: ", doc.data());
        const itemFull = {id: doc.id, ...doc.data()};
        console.log("itemFull ", itemFull);
        setItem(itemFull);
      });
    }, [id])


  return (
    <>
        <ItemDetail item={item}/>
    </>
  )
}

export default ItemDetailContainer;