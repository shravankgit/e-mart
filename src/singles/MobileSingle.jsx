import React from 'react'

import { mobileData } from '../stores/data/mobiles'

import { useParams } from 'react-router-dom'
import Navbar from '../stores/components/Navbar'

import { useCart } from '../stores/context/CartContext'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const MobileSingle = () => {

    const { id } = useParams()
    
    const {addToCart, cartItems} = useCart()

    const product = mobileData.find((item) => item.id === id)

    const handleAddToCart = () => {
        addToCart(product)
        toast.success('Added to cart!', { position: 'top-center', autoClose: 1500 })
    }

    return (
        <>
            <Navbar />
            <ToastContainer />
            <div className="ind-section">
                <div className='ind-image'>
                    <img src={product.image} alt="" />
                </div>

                <div className="ind-details space">
                    <div className="ind-company">
                        <h2>{product.company}</h2>
                    </div>

                    <div className="ind-model space">
                        <h3>{product.model}</h3>
                    </div>
                    <div className="ind-price space">
                        <h2>{product.price}</h2>
                    </div>
                    <div className="ind-desc space">
                        <p>
                            {product.description}
                        </p>
                    </div>
                    <button className='add-to-cart-btn' onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>

        </>
    )
}

export default MobileSingle