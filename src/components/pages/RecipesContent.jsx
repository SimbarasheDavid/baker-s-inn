import React from 'react'
import atthe from '../../assets/images/Group 312.png'
import zero1 from '../../assets/images/Rectangle 718.png'
import zero2 from '../../assets/images/Rectangle 719.png'
import zero3 from '../../assets/images/Rectangle 720.png'
import zero4 from '../../assets/images/Rectangle 721.png'
import tower from '../../assets/images/eiffel-tower 1.png'
import zflag from '../../assets/images/206841 1.png'
import KidsCard from '../cards/KidsCard'
import VegansCard from '../cards/VegansCard'
import FamilyCard from '../cards/FamilyCard'
import { useState } from 'react'
const RecipesContent = () => {
    const [toogleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
      ``
      setToggleState(index)
    }
    return (
        <>
            <div id="community">
            <div className="paris">
                <div className="textBox">
                                            <h1>
                            The Finest of Baker’s Tik Tok Community Recipes
                        </h1>
                        <p>Make the finest croissants worthy of <span><img src={tower} alt="" /></span> Paris from your <span className='zim'><img src={zflag} alt="" /></span> home
                            #Croissant #Zimbabwe #Paris #Baker’s_Inn</p>
                        <div className="at">
                            <img src={atthe} alt="" />
                        </div>
                    </div>
                    <div className="croissant">
                        <div className="four-pics">
                            <img src={zero1} alt="" />
                            <div className="overlay"></div>
                        </div>
                        <div className="four-pics">
                            <img src={zero2} alt="" />
                            <div className="overlay"></div>
                        </div>
                        <div className="five-pics">
                            <img src={zero3} alt="" />
                            <div className="overlay"></div>
                        </div>
                        <div className="five-pics">
                            <img src={zero4} alt="" />
                            <div className="overlay"></div>
                        </div>
                    </div>
                </div>
<div id="recipes">
    <h2>Our Recipes</h2>
    
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
            </div>
        </>
    )
}

export default RecipesContent
