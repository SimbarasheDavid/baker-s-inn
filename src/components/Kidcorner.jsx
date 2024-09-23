import React from 'react'
import afri2 from '../assets/images/African Pattern 1.png'
import afri3 from '../assets/images/African Pattern 5.png'
import palm from '../assets/images/palm.png'
import marioo from '../assets/images/Group 7.png'
import bros from '../assets/images/mario bros.png'
import shroom from '../assets/images/shroom.png'
import kids from '../assets/images/Kids.png'
import { Link } from 'react-router-dom'
import coner from '../assets/images/Corner.png'
const Kidcorner = () => {
    return (
        <>
            <div id="mario">
                <div className="patterns">
                    <div className="pattern">
                        <img src={afri2} alt="" />
                    </div>
                    <div className="pattern">
                        <img src={afri3} alt="" />
                    </div>
                </div>
                <div className="first">
                    <div className="palm">
                        <img src={palm} alt="" />
                    </div>
                    <div className="marioo">
                        <img src={marioo} alt="" />
                    </div>
                    <div className="mario-bros">
                        <img src={bros} alt="" />
                    </div>
                    <div className="shroom">
                        <img src={shroom} alt="" />
                    </div>
                </div>
                <div className="kids-text">
                    <div className="head">
                        <div className="head-first">
                            <img src={kids} alt="" />
                        </div>
                        <div className="head-2nd">
                            <img src={coner} alt="" />
                        </div>
                    </div>
                    <div className="texboxx">
                        <p>Let your children join the fun. Explore a place <span><br /></span> with exciting games and the top winners stand a <span><br /></span> chance to win exciting monthly prizes!</p>
                        <button><Link to='./kidscornerpage'>PLAY GAMES</Link></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Kidcorner
