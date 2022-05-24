import React from 'react'

export const Item = ({id, title, price, pictureUrl}) => {

  return (
    <>
        <div className="card" style={ {width: '15rem'} }>
            <img src={pictureUrl} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <a href=" " className="btn btn-outline-dark">{price}</a>
            </div>
        </div>
    </>
  )
}
