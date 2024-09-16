import React from 'react'
import patt5 from '../assets/images/African Pattern 4.png'
import patt6 from '../assets/images/African Pattern 7.png'
import blue from '../assets/images/Rectangle 5.png'
import green from '../assets/images/Rectangle 8.png'
import brown from '../assets/images/Rectangle 7.png'
const Promotions = () => {
    return (
        <>
            <div id="promo">
                <div className="afri-pattern">
                    <div className="first-pat">
                        <img src={patt5} alt="" />
                    </div>
                    <div className="first-pat">
                        <img src={patt6} alt="" />
                    </div>
                </div>
                <form action="">
                    <h2>Get Notified about promotions we offer</h2>
                    <input type="text" placeholder='your email'/>
                   <button>SUBMIT</button>
                </form>
                <div className="breddo">
                <div className="green">
                        <img src={green} alt="" />
                    </div>
                    <div className="blue">
                        <img src={blue} alt="" />
                    </div>
                                       <div className="brown">
                        <img src={brown} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Promotions
