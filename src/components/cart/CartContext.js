import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const nationalSend = 7000;

    const addItem = (item, quantity) => {
        //Agrego la cantidad a mi item json
        const isInCart = cartList.find(obj => obj.id === item.id);
        if(isInCart === undefined){
            item.quantity = quantity;
            setCartList([...cartList, item]);
        }else{
            isInCart.quantity += quantity;
            setCartList([...cartList]);
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

    const calcQuantityItems = () => {
        //ver la cantidad de items
        let quantitys = cartList.map(item => item.quantity);
        return quantitys.reduce((prev,curr)=> prev + curr,0);
    };

    const calcTotalPriceItem = (item) => {
        let price = (item.price).replaceAll(',', '');
        return item.quantity * parseFloat(price);
    };

    const calcSubTotal = () => {
        let totalItem = cartList.map(item => calcTotalPriceItem(item));
        return totalItem.reduce((prev,curr) => prev + curr);
    };

    const calcTotalPurchase = () => {
        return nationalSend + calcSubTotal();
    };

    return (
        <CartContext.Provider value={{cartList, addItem, removeItem, deleteCart, calcQuantityItems, calcTotalPriceItem, calcSubTotal, nationalSend, calcTotalPurchase}}>
            {children}
        </CartContext.Provider>
    );
}
export default CartContextProvider;