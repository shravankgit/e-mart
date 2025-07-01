
import React from 'react'

import { mobileData } from '../stores/data/mobiles'

import { useParams } from 'react-router-dom'


const MobileSingle = () => {
    
    const {id} = useParams()
    
    const product = mobileData.find((item)=>item.id === id)
    
    console.log(id);
    
  return (
    <div className='ind-page'>
        <div className="ind-image">
            <img src={product.image} alt="" />
        </div>
        <div className="ind-model">
            <h3>{product.model}</h3>
        </div>
        <div className="ind-price">
            <h2>{product.price}</h2>
        </div>
        <div className="ind-desc">
            <p>
                {product.description}
            </p>
        </div>
    </div>
  )
}

export default MobileSingle