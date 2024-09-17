import React from 'react'
import donner from '../assets/images/donations.png'
const Donnations = () => {
  return (
    <>
      <div id="donnations">
        <div className="donations">
        <div className="donner-img">
            <img src={donner} alt="" />
        </div>
        <div className="donner-text">
            <h2>Request A Donation</h2>
            <p>If you are holding an event that you wish to have us <span><br /></span> donate to, we’re more than glad to help. Fill in the <span><br /></span> donation request form for us to best understand how we <span><br /></span> can increase your event’s impact in the local community</p>
            <button>REQUEST DONATION</button>
        </div>
        </div>
      </div>
    </>
  )
}

export default Donnations
