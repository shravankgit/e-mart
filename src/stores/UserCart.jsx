
import React from 'react'

import { useCart } from './context/CartContext'
import Navbar from './components/Navbar'



const UserCart = () => {

    const { cartItems, addToCart } = useCart()

    return (
        <>
            <Navbar />



            <div>
                {cartItems.length === 0 ? (
                    
                        <div className='cartItemsEmpty'>
                            <h2> Your cart is empty </h2> 
          <h4>So please add products to the cart</h4>
                        </div>
                    
          
            
        ) : (
                
                cartItems.map((item) => {
                    return (
                        <div className="cart-section">
                            <div className="cart-img">
                                <img src={item.image} alt="" />
                            </div>
                            <div className="cart-details">
                                <h3>{item.product}</h3>
                                <h2>
                                    {item.price}
                                </h2>
                                <h3>{item.model}</h3>
                            </div>

                        </div>
                    )
                }))}
            </div>
        </>
    )
}

export default UserCart