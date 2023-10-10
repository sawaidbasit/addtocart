import React, {useContext, useState} from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2';
import Item from './Item'; 
import { products } from './Products';
import { CartContext } from './Cart';


const ContextCart = () => {
    const {item} = useContext(CartContext )

  return (
    <>
       <header >
        <div className='continue-shopping'>
        <img src="./images/arrow.png" alt="arrow" className='arrow-icon'/>
        <h3>Continue Shopping</h3>
        </div>

        <div className='cart-icon'>
            <img src="./images/cart.png" alt="cart" />
            <p>7</p>
        </div>
    </header>

    <section className='main-cart-section'>
        <h1>Shopping Cart</h1>
        <p>You have <span className='total-items'>7</span> Items in Shopping Cart</p>
    
    <div className='cart-items'>
        <div className='cart-items-container'>
        <Scrollbars >
            {
            item.map((curentItem) =>{
                return <Item key={curentItem.id} {...curentItem}/>
            })
            }

      </Scrollbars>

        </div>
    </div>
    
    <div className='cart-total'>
        <h3>Cart Total : <span>20000$</span></h3>
        <button>CheckOut</button>
    </div>
    </section>
    </>
  )
}

export default ContextCart
