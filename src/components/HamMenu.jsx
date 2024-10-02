import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const HamMenu = () => {
    const [burger_class, setBurgerClass] = useState('burger-bar unclicked')
    const [menu_class, setMenuClass] = useState('menu hidden')
    const [isMenuClicked, setIsMenuClicked] = useState(false)
    // toggle burger
    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass('burger-bar clicked')
            setMenuClass('menu visible')
        }
        else {
            setBurgerClass('burger-bar unclicked')
            setMenuClass('menu hidden')
        }
        setIsMenuClicked(!isMenuClicked)
    }
    return (
        <div id='ham'>
            <div>
                <nav>
                    <div className='burger'>
                        <div className="burger-menu" onClick={updateMenu}>
                            <div id='first' className={burger_class} ></div>
                            <div className={burger_class} ></div>
                            <div id='third' className={burger_class} ></div>
                        </div>
                    </div>
                </nav>
                <div className={menu_class}>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='./aboutuspage'><li>About Us</li></Link>
                    <Link to='./producepage'><li>Products</li></Link>
                    <Link to='./reccipespage'><li>Recipes</li></Link>
                    <Link to='./kidscornerpage'><li>Kid's Corner</li></Link>
                    <Link to='./contactuspage'><li>Contact Us</li></Link>
                </div>
            </div>
        </div>
    )
}

export default HamMenu
