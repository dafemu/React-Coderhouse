import React from 'react'

export const CartWidget = ({badge}) => {
  return (
    <>
        <button type="button" className="btn btn-primary ms-2">
            <i className="bi bi-cart4"></i>
            {
              badge === 0 
              ? <span className="badge text-bg-secondary"></span>
              : <span className="badge text-bg-secondary">{badge}</span>
            }
        </button>
    </>
  )
}
