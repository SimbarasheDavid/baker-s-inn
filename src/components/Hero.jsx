import React from 'react'
import rectangle from '../assets/images/African Pattern 1.png'
import rectangle1 from '../assets/images/African Pattern 5.png'
import bread1 from '../assets/images/Rectangle 5.png'
import bread2 from '../assets/images/Rectangle 8.png'
import bread3 from '../assets/images/Rectangle 7.png'
import bread4 from '../assets/images/Rectangle 345.png'
const Hero = () => {
  return (
    <div id='Hero'>
      <div className="rect-2">
        <div className="rect-3">
          <img src={rectangle} alt="" />
        </div>
        <div className="rect-4">
          <img src={rectangle1} alt="" />
        </div>
      </div>
      <div className="textBread">
        <div className="heroText">
          <h1>Bringing you the <span>best value</span> at the <span>best prices.</span> </h1>
          <p>The freshest sandwiches you can make are with Baker’s inn soft white loaf.</p>
          <button>READ MORE</button>
        </div>
        <div className="bread">
          <div className="bread-one">
            <img src={bread1} alt="" />
          </div>
          <div className="bread-two">
            <img src={bread2} alt="" />
          </div>
          <div className="bread-three">
            <img src={bread3} alt="" />
          </div>
          <div className="bread-four">
            <img src={bread4} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
