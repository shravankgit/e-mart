
import React from 'react'

import { computerData } from '../data/computers'

const Computers = () => {

    const firstFiveImages = computerData.slice(0, 5)

    return (
        <>
            <h2>Computer</h2>
            <div className='proSection'>
                {
                    firstFiveImages.map((item) => {
                        return (
                            <div className='imageBox'>
                                <img className='proImage' src={item.image} alt="" />
                                {/* <h6>Company: {item.company}</h6>
                                <h6>Price: {item.price}</h6> */}

                            </div>
                        )
                    })

                }

            </div>




        </>
    )
}

export default Computers