import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addItem = (item, quantity) => {
        //Agrego la cantidad a mi item json
        const isInCart = cartList.find(obj => obj.id === item.id);
        if(isInCart === undefined){
            item.quantity = quantity;
            setCartList([...cartList, item]);
        }else{
            isInCart.quantity += quantity;
        }
    };

    const removeItem = (id) => {
        //quitar el producto con un id = id con un filter
        const filter = cartList.filter(item => item.id !== id);
        setCartList(filter);
    };

    const deleteCart = () => {
        //borrar todos los items del carrito
        setCartList([]);

    };

    return (
        <CartContext.Provider value={{cartList, addItem, removeItem, deleteCart}}>
            {children}
        </CartContext.Provider>
    );
}
export default CartContextProvider;