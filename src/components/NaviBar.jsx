import React from 'react'
import logo from '../assets/images/bakers-inn-category 1.png'
import { Link } from 'react-router-dom'
import HamMenu from './HamMenu'
const NaviBar = () => {
  return (
    <>
      <nav>
        <Link to='/' className="logo">
          <img src={logo} alt="" />
        </Link>
        <ul>
          <Link to='/aboutuspage'>
            <li>About Us</li>
          </Link>
          <Link to='/producepage'>
            <li>Products</li>
          </Link>

          <Link to='/reccipespage'><li>Recipes</li></Link>
          <Link to='/kidscornerpage'><li>Kid's Corner</li></Link>
          <Link to='/contactuspage'><button>CONTACT US</button></Link>
          <div className="hamMenu">
          <HamMenu/>
          </div>
         
        </ul>
      </nav>
    </>
  )
}

export default NaviBar
