import React from 'react'
import range from '../../assets/images/products range.png'
import drop2 from '../../assets/images/Group 300.png'
import { useState } from 'react'
import LoafCard from '../cards/LoafCard'
import MeatPieCard from '../cards/MeatPieCard'
import SconeCard from '../cards/SconeCard'
import DonutCard from '../cards/DonutCard'
const ProduceContent = () => {
    const [toogleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        ``
        setToggleState(index)
    }
    return (

        <>
            <div id="product-range">
                <div className="range">
                    <div className="prod-img">
                        <img src={range} alt="" />
                    </div>
                    <div className="produce-text">
                        <h2>Our Product Range</h2>
                        <div className="drop">
                            <img src={drop2} alt="" />
                        </div>
                    </div>
                </div>

            </div>
            <div id="our-produce">
                <h2>Our Products</h2>
                <ul className='tabs-four'>
                    <div className= {toogleState === 1 ? 'breado active-breado':'breado'} onClick={() => toggleTab(1)}>
                        <li>Bread</li>
                    </div>
                    <div className= {toogleState === 2 ? 'meatpies active-meatpies':'meatpies'} onClick={() => toggleTab(2)}>
                        <li>Meat Pies</li>
                    </div>
                    <div className= {toogleState === 3 ? 'scones active-scones':'scones'} onClick={() => toggleTab(3)}>
                        <li>Scones</li>
                    </div>
                    <div className= {toogleState === 4 ? 'donuts active-donuts':'donuts'} onClick={() => toggleTab(4)}>
                        <li>Donuts</li>
                    </div>
                </ul>
                <div className="contento">
                    <div className= {toogleState === 1 ? 'forBread active-forBread':'forBread'}>
                        <div className="card-container">
                            <LoafCard />
                        </div>
                    </div>
                    <div className= {toogleState === 2 ? 'forMeatpies active-forMeatpies':'forMeatpies'}>
                        <div className="card-container">
                            <MeatPieCard />
                        </div>
                    </div>
                    <div className= {toogleState === 3 ? 'forScones active-forScones':'forScones'}>
                        <div className="card-container">
                            <SconeCard />
                        </div>
                    </div>
                    <div className= {toogleState === 4 ? 'forDonuts active-forDonuts':'forDonuts'}>
                        <div className="card-container">
                            <DonutCard />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProduceContent
