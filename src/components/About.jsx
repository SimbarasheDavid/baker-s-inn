import React from 'react'
import sand from '../assets/images/Rectangle 12.png'
import pies from '../assets/images/Rectangle 14.png'
import donut from '../assets/images/Rectangle 15.png'
import sliced from '../assets/images/Rectangle 16.png'
const About = () => {
  return (
    <div id='bout'>
      <div className="about">
        <h2>About Baker’s Inn</h2>
        <div className="eighties">
          <p>It all started back in the eighties when Baker's Inn was just a small confectionery company that employed 40 people and produced about 30,000 loaves a day. We now aim to provide a nourishing, convenient and accessible answer to hunger’s call.</p>
          <button>READ MORE</button>
        </div>
      </div>
      <div className="four-container">
        <div className="sandwich">
          <img src={sand} alt="" />
        </div>
        <div className="pie">
          <img src={pies} alt="" />
        </div>
        <div className="ring">
          <img src={donut} alt="" />
        </div>
        <div className="slice">
          <img src={sliced} alt="" />
        </div>
      </div>

    </div>
  )
}

export default About
