import React from 'react'
import crown from '../assets/images/Group 13.png'
import gram1 from '../assets/images/footer1.png'
import gram2 from '../assets/images/footer2.png'
import gram3 from '../assets/images/footer3.png'
import twit from '../assets/images/akar-icons_twitter-fill.png'
import face from '../assets/images/akar-icons_facebook-fill.png'
import linkd from '../assets/images/bi_linkedin.png'
import foni from '../assets/images/Vector.png'
import mail from '../assets/images/teenyicons_envelope-solid.png'
import diary from '../assets/images/inscor_logo@2x 1.png'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <>
            <footer>
                <div className="crown">
                    <hr />
                    <div className="crown-img">
                        <img src={crown} alt="" />
                    </div>
                    <hr />
                </div>
                <div className="footer-container">
                    <div className="feed">


                        <h2>Instagram Feed</h2>
                        <div className="instagram">
                            <div className="instagram-img">
                                <img src={gram1} alt="" />
                            </div>
                            <div className="instagram-img">
                                <img src={gram2} alt="" />
                            </div>
                            <div className="instagram-img">
                                <img src={gram3} alt="" />
                            </div>
                        </div>
                        <div className="linkedin">
                            <div className="twitter">
                                <img src={twit} alt="" />
                            </div>
                            <div className="twitter">
                                <img src={face} alt="" />
                            </div>
                            <div className="twitter">
                                <img src={linkd} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="location">
                        <h2>Our Location</h2>
                        <div className="adress">
                            <p>1 Shepperton Road, <span><br /></span> Graniteside, <span><br /></span>
                                Harare,<span><br /></span>
                                Zimbabwe.</p>
                        </div>
                    </div>
                    <div className="touch">
                        <h2>Get In Touch With Us</h2>
                        <div className="phone">
                            <div className="fon">
                                <img src={foni} alt="" />
                            </div>
                            <p>08080151 </p>
                        </div>
                        <div className="other">
                            <p>08080152</p>
                            <p>+263 242 751 481</p>
                            <p>+263 242 710 334</p>
                        </div>
                        <div className="mail">
                            <div className="email">
                                <img src={mail} alt="" />
                            </div>
                            <p>marketing@bakersinnzim.com</p>
                        </div>
                    </div>
                    <div className="sitemap">
                        <h2>Sitemap</h2>
                        <Link to='/'><p>Home</p></Link>
                        <Link to='./aboutuspage'><p>About-Us</p></Link>
                        <Link to='./producepage'><p>Products</p></Link>
                        <Link to='./reccipespage'><p>Recipies</p></Link>
                        <Link to='kidscornerpage'><p>Kids Corner</p></Link>
                    </div>
                </div>
                <hr />
                <div className="subsidiary">
                    <h3>Subsidaiary of</h3>
                    <div className="sub-img">
                        <img src={diary} alt="" />
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
