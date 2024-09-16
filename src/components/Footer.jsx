import React from 'react'
import fline from '../assets/images/Rectangle 692.png'
import tline from '../assets/images/Rectangle 692.png'
import sline from '../assets/images/Group 13.png'
import one from '../assets/images/Rectangle 688.png'
import two from '../assets/images/Rectangle 689.png'
import three from '../assets/images/Rectangle 690.png'
import call from '../assets/images/Vector.png'
import mail from '../assets/images/teenyicons_envelope-solid.png'
import twitter from '../assets/images/akar-icons_twitter-fill.png'
import facebook from '../assets/images/akar-icons_facebook-fill.png'
import linked from '../assets/images/bi_linkedin.png'
import inscor from '../assets/images/inscor_logo@2x 1.png'
const Footer = () => {
    return (
        <div id='last'>
            <div className="threeply">
                <div className="first">
                    <img src={fline} alt="" />
                </div>
                <div className="second">
                    <img src={sline} alt="" />
                </div>
                <div className="third">
                    <img src={tline} alt="" />
                </div>
            </div>
            <div className="insta-Container">
                <div className="gram">
                    <h2>Instagram Feed</h2>
                    <div className="three-pics">
                        <div className="pics">
                            <img src={one} alt="" />
                        </div>
                        <div className="pics">
                            <img src={two} alt="" />
                        </div>
                        <div className="pics">
                            <img src={three} alt="" />
                        </div>
                    </div>
                </div>
                <div className="location">
                    <h2>Our Location</h2>
                    <p>1 Shepperton Road, Graniteside,
                        Harare,
                        Zimbabwe.</p>
                </div>
                <div className="intouch">
                    <h2>Get in Touch With Us</h2>
                    <div className="touch">


                        <div className="call">
                            <img src={call} alt="" />
                            <p>08080151 </p>
                        </div>
                        <div className="numbre">
                            <p>08080152</p>
                            <p>+263 242 751 481</p>
                            <p>+263 242 710 334</p>
                        </div>
                        <div className="email">
                            <img src={mail} alt="" />
                            <p>marketing@bakersinnzim.com</p>
                        </div>
                    </div>
                </div>
                <div className="map">
                    <h2>Sitemap</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Products</li>
                        <li>Recipes</li>
                        <li>Kids Corner</li>
                    </ul>
                </div>
            </div>
            <div className="foot-icons">
                <div className="twit">
                    <img src={twitter} alt="" />
                </div>
                <div className="twit">
                    <img src={facebook} alt="" />
                </div>
                <div className="twit">
                    <img src={linked} alt="" />
                </div>
            </div>
            <div className="subsidiary">
                <p>Subsidiary of</p>
                <div className="inscor">
                    <img src={inscor} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer
