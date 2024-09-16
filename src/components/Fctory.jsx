import React from 'react'
import fact from '../assets/images/Rectangle 32.png'
import nation from '../assets/images/Rectangle 31.png'
const Fctory = () => {
  return (
    <div id='tour'>
      <div className="factory-tour">
      <div className="tour-text">
      <h2>Book A Factory Tour</h2>
        <p>Keen on seeing how Baker’s inn products are made? Are you interested in a field trip day for your school’s class? Get in touch with us to book a tour of our factory that is closest to you. Fill in the booking form and we will get back to you.</p>
        <button>BOOK FACTORY TOUR</button>
      </div>
       
        <div className="fact">
            <img src={fact} alt="" />
        </div>
      </div>
      <div className="request">
      <div className="req-donations">
        <div className="donations">
            <img src={nation} alt="" />
        </div>
        <div className="textbox">
            <h2>Request A Donation</h2>
            <p>If you are holding an event that you wish to have us donate to, we’re more than glad to help. Fill in the donation request form for us to best understand how we can increase your event’s impact in the local community</p>
            <button>REQUEST DONATION</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Fctory
