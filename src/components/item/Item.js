import React from 'react'
import{ Link }from'react-router-dom';

export const Item = ({id, title, price, pictureUrl}) => {

  return (
    <>
        <div className="card" style={ {width: '15rem'} }>
            <img src={pictureUrl} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <Link to={`/item/${id}`}><button className="btn btn-outline-dark">${price} COL</button></Link>
            </div>
        </div>
    </>
  )
}
