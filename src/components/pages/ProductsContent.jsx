import React from 'react'
import stree from '../../assets/images/Rectangle 34.png'
import dropx from '../../assets/images/Group 300.png'
import LoafCard from '../cards/LoafCard'
import MeatPieCard from '../cards/MeatPieCard'
import SconeCard from '../cards/SconeCard'
import DonutCard from '../cards/DonutCard'
import { useState } from 'react'
const ProductsContent = () => {
    const [toogleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
      ``
      setToggleState(index)
    }
    return (
        <div id='range'>
            <div className="core-vision">
                <div className="core">
                    <img src={stree} alt="" />
                </div>
                <div className="bout-us">
                    <h2>About Us</h2>
                    <div className="ore">
                        <img src={dropx} alt="" />
                    </div>
                </div>
            </div>
            <div className="tabscontaier">
                <h2>Our Products</h2>
                <ul className='tabs'>
                    <div className= {toogleState === 1 ? 'white active-white':'white'} onClick={() =>toggleTab(1)}>
                        <li>Bread</li>
                    </div>
                    <div className= {toogleState === 2 ? 'wheat active-wheat':'wheat'} onClick={() =>toggleTab(2)}>
                        <li>Meat Pies</li>
                    </div>
                    <div className= {toogleState === 3 ? 'soft active-soft':'soft'} onClick={() =>toggleTab(3)}>
                        <li>Scones</li>
                    </div>
                    <div className= {toogleState === 4 ? 'premium active-premium':'premium'} onClick={() =>toggleTab(4)}>
                        <li>Donuts</li>
                    </div>
                </ul>
                <div className="contento">
                    <div className={toogleState === 1 ? 'loaves active-loaves':'loaves'} >
                        <div className="cardContainer">
                            <LoafCard />
                        </div>
                    </div>
                    <div className={toogleState === 2 ? 'meatpies active-meatpies':'meatpies'}>
                        <div className="cardContainer">
                            <MeatPieCard />
                        </div>
                    </div>
                    <div className={toogleState === 3 ? 'scone active-scone':'scone'}>
                        <div className="cardContainer">
                            <SconeCard />
                        </div>
                    </div>
                    <div className={toogleState === 4 ? 'donnut active-donnut':'donnut'}>
                        <div className="cardContainer">
                            <DonutCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsContent
