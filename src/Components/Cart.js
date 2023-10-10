import React, {createContext, useReducer } from 'react'
import './Cart.css'
import { products } from './Products';
import ContextCart from './ContextCart';
import { reducer } from '../Components/reducer';

export const CartContext = createContext();

const initialState = {
    item: products,
    totalAmount: 0,
    totalItem: 0,
}

const Cart = () => {

const [state, dispatch] = useReducer(reducer, initialState);

// to delete the individual element from an item Cart
const removeItem = (id) =>{
    return dispatch({
        type: "REMOVE_ITEM",
        payload : id,
    });
}

// Clear the Cart at one Click
const clearCart = () =>{
    return dispatch({
        type : "CLEAR_CART"
    })
}
  return (
    <CartContext.Provider value={{...state, removeItem,clearCart}}>
        <ContextCart/>
   </CartContext.Provider>
    
  )
}

export default Cart
