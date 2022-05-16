import React from 'react'

export const CartWidget = ({badge}) => {
  return (
    <>
        <button type="button" class="btn btn-primary ms-2">
            <i className="bi bi-cart4"></i>
            <span class="badge text-bg-secondary">{badge}</span>
        </button>
    </>
  )
}
