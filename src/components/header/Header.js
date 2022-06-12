import React, { useContext } from 'react'
import { CartWidget } from '../cartwidget/CartWidget'
import{ Link, NavLink } from'react-router-dom';
import { CartContext } from '../cart/CartContext';

const Header = () => {
    const cartContext = useContext(CartContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <NavLink className="navbar-brand" to={"/"}>DMB</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 ms-5 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link" to={"category/1"}>Hombre</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <NavLink className="nav-link" to={"category/2"}>Mujer</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <NavLink className="nav-link" to={"/"}>Marcas</NavLink>
                    </li>
                </ul>
                    <button className="btn btn-outline-light" type="submit">Iniciar Sesión</button>
                    <CartWidget badge={cartContext.calcQuantityItems()} />
            </div>
        </div>
    </nav>
  )
}

export default Header;