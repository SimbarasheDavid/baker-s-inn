import React from 'react'
import afri from '../assets/images/African Pattern 1.png'
import afri1 from '../assets/images/African Pattern 5.png'
import four from '../assets/images/Group 2.png'
import fistline from '../assets/images/firstline.png'
import scndline from '../assets/images/scndline.png'
const Banner = () => {
  return (
    <>
      <div id="banner">
        <div className="patterns">
            <div className="patten">
                <img src={afri} alt="" />
            </div>
            <div className="patten">
                <img src={afri1} alt="" />
            </div>
        </div>
        <div className="bannerContents">
            <div className="bannertext">
                <h1>Bringing you the <span><br /></span> best value at the <span><br /></span> best prices.</h1>
                <div className="two-lines">
                  <div className="fistline">
                    <img src={fistline} alt="" />
                  </div>
                  <div className="scndline">
                    <img src={scndline} alt="" />
                  </div>
                </div>
                <p>The freshest sandwiches you can make are <span><br /></span> with Baker’s inn soft white loaf.</p>
                <button>READ MORE</button>
            </div>
            <div className="four-loaves">
                <img src={four} alt="" />
            </div>
        </div>
      </div>
    </>
  )
}

export default Banner
