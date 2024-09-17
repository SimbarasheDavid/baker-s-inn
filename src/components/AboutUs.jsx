import React from 'react'
import abt1 from '../assets/images/about1.png'
import abt2 from '../assets/images/about2.png'
import abt3 from '../assets/images/about3.png'
import abt4 from '../assets/images/about4.png'
const AboutUs = () => {
  return (
    <>
      <div id="bout">
        <div className="bout-text">
            <h1>About Baker’s Inn</h1>
            <div className="hunger">
                <p>It all started back in the eighties when Baker's Inn was just a small confectionery company that employed 40 people and produced about 30,000 loaves a day. We now aim to provide a nourishing, convenient and accessible answer to hunger’s call.</p>
                <button>READ MORE</button>
            </div>
        </div>
        <div className="bout-images">
            <div className="bout-four">
                <img src={abt1} alt="" />
            </div>
            <div className="bout-four">
                <img src={abt2} alt="" />
            </div>
            <div className="bout-four">
                <img src={abt3} alt="" />
            </div>
            <div className="bout-four">
                <img src={abt4} alt="" />
            </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs
