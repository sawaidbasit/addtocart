import React, {createContext, useReducer } from 'react'
import './Cart.css'
import { products } from './Products';
import ContextCart from './ContextCart';
import { reducer } from 'react';

export const CartContext = createContext();

const Cart = () => {

const initialState = {
    item : products,
    totalAmount : 0,
    totalItem : 0,
};

    const[state, dispatch] = useReducer(reducer, initialState)
  return (
    <CartContext.Provider value={{...state}}>
        <ContextCart/>
   </CartContext.Provider>
    
  )
}

export default Cart
