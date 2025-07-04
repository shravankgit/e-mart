import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <>
            <div className='navSection'>
                <div className="title">
                    <Link to='/'>
                        <h2>E-Mart</h2>
                    </Link>
                </div>

                <div className="search">
                    <input type='text' placeholder='search...' />
                </div>
                <div className="user">
                    <div className="user-detail">SignIN/SignUp</div>
                    <link to='/cart'>
                        <div className="cart"> Cart</div>
                    </link>
                </div>

            </div>
            <div className="subMenu">
                <ul>
                    <Link to='/mobiles'>
                        <li>Mobiles</li>
                    </Link>
                    <Link to='/computers'>
                        <li>Computers</li>
                    </Link>
                    <Link to='/watches'>
                        <li>Watches</li>
                    </Link>
                    <Link to='/Tv'>
                        <li>Tv</li>
                    </Link>
                    <Link to='/Ac'>
                        <li>Ac</li>
                    </Link>
                    <Link to='/Woman'>
                        <li>Woman Dressing</li>
                    </Link>


                </ul>

            </div>
        </>
    )
}

export default Navbar