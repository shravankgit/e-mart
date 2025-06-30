import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className='navSection'>
                <div className="title">
                    <h2>E-Mart</h2>
                </div>

                <div className="search">
                    <input type='text' placeholder='search...' />
                </div>
                <div className="user">
                    <div className="user-detail">
                        SignIN/SignUp
                    </div>
                    <div className="cart">
                        Cart
                    </div>
                </div>

            </div>
            <div className="subMenu">
                <ul>
                    <li>Mobiles</li>
                    <li>Computers</li>
                    <li>Watches</li>
                    <li>Tv</li>
                    <li>Ac</li>
                    <li>Woman Dressing</li>
                </ul>
                
            </div>
        </>
    )
}

export default Navbar