import React, { useContext } from 'react'
import { CartContext } from './Cart'

const Item = ({ id,description, title, img, price, quantity}) => {
    const {removeItem,increamentItem} = useContext(CartContext)


  return (
   <>
     <div className="items-info">
                <div className='product-img'>
                    <img src={img} alt="image" />
                </div>

                <div className="title">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>

                <div className="add-minus-quantity">
                    <i className="fa-solid fa-minus minus"></i>
                    <input type="text" placeholder={quantity} />
                    <i className="fa-solid fa-plus add" onClick={()=> increamentItem(id)}></i>
                </div>

                <div className="price">
                    <h3>{price}</h3>
                </div>

                <div className="remove-item">
                    <i onClick={()=>
                        removeItem(id)
                        } className ='fas fa-trash-alt remove'></i>
                </div>
            </div>
            <hr/>
   </>
  )
}

export default Item
