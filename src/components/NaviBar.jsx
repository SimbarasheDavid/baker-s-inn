import React from 'react'
import logo from '../assets/images/bakers-inn-category 1.png'
const NaviBar = () => {
  return (
    <>
    <nav>
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <ul>
            <li>About Us</li>
            <li>Products</li>
            <li>Recipes</li>
            <li>Kid's Corner</li>
            <button>CONTACT US</button>
        </ul>
        </nav>  
    </>
  )
}

export default NaviBar
