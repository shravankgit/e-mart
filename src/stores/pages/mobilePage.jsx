
import React from 'react'
import { mobileData } from '../data/mobiles'


const MobilePage = () => {
  return (
    <div className='pageSection'>
        {mobileData.map((item)=>{
          return(
            <div>
              <div className='pageImg'>
                <img src={item.image} alt=''/>
                
              </div>
            </div>
          )
          
        })}
    </div>
  )
}

export default MobilePage