import React from 'react'
import factorytour from '../assets/images/factorytour.png'
const Factory = () => {
  return (
    <>
    <div id="tour">
        <div className="factory">
            <h2>Book A Factory Tour</h2>
            <p>Keen on seeing how Baker’s inn products are made? Are <span><br /></span> you interested in a field trip day for your school’s class? <span><br /></span> Get in touch with us to book a tour of our factory that is <span><br /></span> closest to you. Fill in the booking form and we will get <span><br /></span> back to you.</p>
            <button>BOOK FACTORY TOUR</button>
        </div>
        <div className="factory-img">
            <img src={factorytour} alt="" />
        </div>
        </div>  
    </>
  )
}

export default Factory
