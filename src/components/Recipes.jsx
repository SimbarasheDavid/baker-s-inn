import React from 'react'
import KidsCard from './cards/KidsCard'
import VegansCard from './cards/VegansCard'
import FamilyCard from './cards/FamilyCard'
import { useState } from 'react'
const Recipes = () => {
    const [toogleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    ``
    setToggleState(index)
  }
    return (
        <div id='recipes'>
            <h2>Baker’s Recipes</h2>
            <ul className='tabs'>
                <div className={toogleState === 1 ? 'kids active-kids':'kids'} onClick={() => toggleTab(1)}>
                    <li>For Kids</li>
                </div>
                <div className= {toogleState === 2 ? 'vegans active-vegans':'vegans'} onClick={() => toggleTab(2)}>
                    <li>For Vegans</li>
                </div>
                <div className= {toogleState === 3 ? 'family active-family':'family'} onClick={() => toggleTab(3)}>
                    <li>For Family</li>
                </div>
            </ul>
            <div className="content">
                <div className= {toogleState === 1 ? 'forKids active-forKids':'forKids'}>
                    <div className="cardContainer">
                        <KidsCard/>
                    </div>
                </div>
                <div className={toogleState === 2 ? 'forVegans active-forVegans':'forVegans'}>
                    <div className="cardContainer">
                        <VegansCard/>
                    </div>
                </div>
                <div className= {toogleState === 3 ? 'forFamily active-forFamily':'forFamily'}>
                    <div className="cardContainer">
                        <FamilyCard/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recipes
