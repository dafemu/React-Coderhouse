import React from 'react'
import { Item } from '../item/Item';

const ItemList = ({items}) => {

  return (
    <>
      <div className='d-flex flex-wrap justify-content-evenly m-2'>
        {
          items.map(item => 
              <Item key={item.id}
              id={item.id}
              price={item.price}
              title={item.title}
              pictureUrl={item.pictureUrl} />
          )
        }
      </div>
    </>
  )
}

export default ItemList;