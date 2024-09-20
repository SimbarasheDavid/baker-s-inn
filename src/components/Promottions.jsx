import React from 'react'
import chingwa from '../assets/images/Group 1.png'
import patfour from '../assets/images/African Pattern 4.png'
import patseven from '../assets/images/African Pattern 7.png'
const Promottions = () => {
  return (
    <>
      <div id="promo">
        <div className="patterns-two">
          <div className="patt-four">
            <img src={patfour} alt="" />
          </div>
          <div className="patt-seven">
          <img src={patseven} alt="" />
          </div>                    </div>
        <div className="notified">
          <form action="">
            <h2>Get Notified About <span><br /></span> Promotions We Offer</h2>
            <div className="in">
              <input type="email" placeholder='your message' />
            </div>
            <button>SUBMIT</button>
          </form>
          <div className="chingwa">
            <img src={chingwa} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Promottions
