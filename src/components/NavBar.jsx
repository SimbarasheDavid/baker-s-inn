import React from 'react'
import logoo from '../assets/images/bakers-inn-category 1.png'
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <>
            <nav id='navBar'>
                <Link to ='/' className='logo'>
                    <img src={logoo} alt="" />
                </Link>
                <ul>
                    <li className='links active-links'><Link to = '/aboutpage'>About-Us</Link></li>
                    <li className='links active-links'><Link to = '/productspages'>Products</Link></li>
                    <li className='links active-links'><Link to = 'recipespage'>Recipes</Link></li>
                    <li className='links active-links'><Link to= '/kidscornerpage'>Kid's Corner</Link></li>
                    <button>CONTACT US</button>
                </ul>
            </nav>
        </>
    )
}

export default NavBar
