import React from 'react'
import paris from '../../assets/images/eiffel-tower 1.png'
import zim from '../../assets/images/206841 1.png'
import croi from '../../assets/images/Group 312.png'
import croi0 from '../../assets/images/Rectangle 718.png'
import croi1 from '../../assets/images/Rectangle 719.png'
import croi2 from '../../assets/images/Rectangle 720.png'
import croi3 from '../../assets/images/Rectangle 721.png'
import KidsCard from '../cards/KidsCard'
import VegansCard from '../cards/VegansCard'
import { useState } from 'react'
import FamilyCard from '../cards/FamilyCard'
const ReccipesContent = () => {
    const [toogleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        ``
        setToggleState(index)
    }
    return (
        <>
            <div id="finest">
                <div className="tik-text">
                    <h2>The Finest of <span><br /></span> Baker’s Tik Tok <span><br /></span> Community Recipes</h2>
                    <p>Make the finest croissants worthy of <img src={paris} alt="" /> Paris from your <img src={zim} alt="" /> home <span><br /></span>
                        #Croissant #Zimbabwe #Paris #Baker’s_Inn</p>
                    <div className="the">
                        <img src={croi} alt="" />
                    </div>
                </div>
                <div className="croissants">
                    <div className="paris">
                    <div className="four-gif">
                        <img src={croi0} alt="" />
                    </div>
                    <div className="four-gif">
                        <img src={croi1} alt="" />
                    </div>
                    </div>
               
                    <div className="paris">
                        <div className="four-gif">
                            <img src={croi2} alt="" />
                        </div>
                        <div className="four-gif">
                            <img src={croi3} alt="" />
                        </div>
                    </div>

                </div>

            </div>
            <div id="Reccipes">
                <h2>Our Recipes</h2>
                <ul className='tabs'>
                    <div className= {toogleState === 1 ? 'kids active-kids':'kids'} onClick={() => toggleTab(1)}>
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
                    <div className= {toogleState === 2 ? 'forVegans active-forVegans':'forVegans'}>
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
        </>
    )
}

export default ReccipesContent
