import React from 'react'
import street from '../../assets/images/Rectangle 347.png'
import drop from '../../assets/images/Group 300.png'
import flagg from '../../assets/images/flag-svgrepo-com 1.png'
import eyee from '../../assets/images/view-vision-svgrepo-com 1.png'
import TeamCard from '../cards/TeamCard'
import ceo from '../../assets/images/Rectangle 31.png'
const AboutContent = () => {
    return (
        <div id='vision'>
            <div className="core-vision">
                <div className="core">
                    <img src={street} alt="" />
                </div>
                <div className="bout-us">
                    <h2>About Us</h2>
                    <div className="ore">
                        <img src={drop} alt="" />
                    </div>
                </div>
            </div>
            <div className="sharpen">
                <div className="flag">
                    <div className="flaag">
                        <img src={flagg} alt="" />
                    </div>
                    <div className="edge">
                        <h2>Our Mission</h2>
                        <p>To sharpen our edge in the manufacture and marketing of quality baked products.</p>
                    </div>
                </div>
                <div className="nourish">
                    <div className="eye">
                        <img src={eyee} alt="" />
                    </div>
                    <div className="view">
                        <h2>Our Vision</h2>
                        <p>To provide a nourishing, convenient and accessible answer to hunger’s call.</p>
                    </div>
                </div>
            </div>
            <div className="core-values">
                <h2>Our Core Values</h2>
                <div className="card-container">
                    <TeamCard/>
                </div>
            </div>
            <div className="promise">
                <div className="qaulity">
                    <img src={ceo} alt="" />
                </div>
                <div className="ceo-text">
                    <h2>PROMISE OF QUALITY</h2>
<p>Thank you for visiting our website. At Baker’s Inn, we are committed to delivering quality premium bread to our customers. We work with a team of over 1500 employees nationwide. Our aim is to uphold the highest ethical standards and perpetuate excellence in the delivery of our products. For us at Baker’s Inn, we aim to improve the accessibility of our bread. We are accountable to our stakeholders to deliver what we promise.
</p>
<div className="dreams">
<p>We translate plans into actions; dreams into reality; strategies into achievements and tangible returns. We strive to be the best in our business and in our partnerships. We are committed to every retail outlet, tuckshop, vendor and consumer in Zimbabwe who stock or consume our nourishing bread throughout Zimbabwe. We have built our top-quality brand and continue to grow as a company because of you. Thank you for your continued support of our brand.
</p>
</div>

<p>We set inspiring goals that we pursue with passion, unity and focus. We support each other, build on our strengths and ensure that every player in our team contributes fully. We play to win and realise that synergy, communication and alignment bind us together.</p>
<div className="ngoni">
    <h3>C.E.O:</h3>
    <p>Ngoni Mazango</p>
</div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent
