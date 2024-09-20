import React from 'react'
import our from '../../assets/images/about-us.png'
import drop from '../../assets/images/Group 300.png'
import flag from '../../assets/images/Group 313.png'
import eye from '../../assets/images/Group 314.png'
import teamwork from '../../assets/images/teamwork.png'
import respect from '../../assets/images/respect.png'
import intergrity from '../../assets/images/intergrity.png'
import commit from '../../assets/images/commitment.png'
import exe from '../../assets/images/excellence.png'
import ngoni from '../../assets/images/ceo.png'
const AboutContent = () => {
    return (
        <>
            <div id="Our-mission">
                <div className="first-sect">
                    <div className="bout">
                        <img src={our} alt="" />
                    </div>
                    <div className="bout-text">
                        <h2>About Us</h2>
                        <div className="drop">
                            <img src={drop} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="our-vision">
                <div className="vision">
                    <div className="flag">
                        <img src={flag} alt="" />
                    </div>
                    <div className="sharpen">
                        <h2>Our Mission</h2>
                        <p>To sharpen our edge in the manufacture <span><br /></span> and marketing of quality baked products.</p>
                    </div>

                </div>
                <div className="mission">
                    <div className="eye">
                        <img src={eye} alt="" />
                    </div>
                    <div className="edge">
                        <h2>Our Vision</h2>
                        <p>To sharpen our edge in the manufacture and <span><br /></span> marketing of quality baked products.</p>
                    </div>

                </div>
            </div>
            <div className="our-core-values">
                <h1>Our Core Values</h1>
                <div className="tree-ply">
                    <div className="team">
                        <div className="teamwork">
                            <img src={teamwork} alt="" />
                        </div>
                        <h2>Teamwork</h2>
                        <p>We set inspiring goals that we pursue with <span><br /></span> passion, unity and focus. We support each other, <span><br /></span> build on our strengths and ensure that every <span><br /></span> player in our team contributes fully. We play to <span><br /></span> win and realise that synergy, communication and <span><br /></span> alignment bind us together.</p>
                    </div>
                    <div className="resp">
                        <div className="respect">
                            <img src={respect} alt="" />
                        </div>
                        <h2>Respect</h2>
                        <p>We build self-esteem by treating each other <span><br /></span> passion, unity and focus. We support each other, <span><br /></span> fairly, communicating directly and respectfully.<span><br /></span> passion, unity and focus. We support each other, <span><br /></span> We have empathy, discipline and build on our <span><br /></span> passion, unity and focus. We support each other, <span><br /></span> diversity as a source of strength, creativity and <span><br /></span> passion, unity and focus. We support each other, <span><br /></span> innovation.</p>
                    </div>
                    <div className="inter">
                        <div className="Integrity">
                            <img src={intergrity} alt="" />
                        </div>
                        <h2>Integrity</h2>
                        <p>We uphold the highest professional and ethical <span><br /></span> standards. We guard the reputation of our <span><br /></span> brands. Our promises are bankable.</p>
                    </div>

                </div>
                <div className="two-ply">
                    <div className="commitment">
                        <div className="commit">
                            <img src={commit} alt="" />
                        </div>
                        <h2>Commitment</h2>
                        <p>We are accountable to our stakeholders and <span><br /></span> commit to deliver what we promise. We <span><br /></span> translate plans into actions; strategies <span><br /></span> into achievements and tangible returns.</p>
                    </div>
                    <div className="excllence">
                        <div className="exce">
                            <img src={exe} alt="" />
                        </div>
                        <h2>Excellence</h2>
                        <p>We strive to be the best in our business. We <span><br /></span> improve all the time, in all aspects and <span><br /></span> passionately deliver at the highest level. We <span><br /></span> offer superior value and present our offering <span><br /></span> with pride.</p>
                    </div>
                </div>
            </div>
            <div className="ceo">
                <div className="ceo-img">
                    <img src={ngoni} alt="" />
                </div>
                <div className="big-text">
                    <h2>PROMISE OF QUALITY</h2>
                    <p>Thank you for visiting our website. At Baker’s Inn, we are committed to delivering <span><br /></span> quality premium bread to our customers. We work with a team of over 1500 <span><br /></span> employees nationwide. Our aim is to uphold the highest ethical standards and <span><br /></span> perpetuate excellence in the delivery of our products. For us at Baker’s Inn, we aim to <span><br /></span> improve the accessibility of our bread. We are accountable to our stakeholders to <span><br /></span> deliver what we promise.
</p>
<p>
We translate plans into actions; dreams into reality; strategies into achievements and <span><br /></span> tangible returns. We strive to be the best in our business and in our partnerships. We <span><br /></span> are committed to every retail outlet, tuckshop, vendor and consumer in Zimbabwe <span><br /></span> who stock or consume our nourishing bread throughout Zimbabwe. We have built <span><br /></span>top-quality brand and continue to grow as a company because of you. Thank you for <span><br /></span> your continued support of our brand.
</p>
<p>

We set inspiring goals that we pursue with passion, unity and focus. We support each <span><br /></span> other, build on our strengths and ensure that every player in our team contributes <span><br /></span> fully. We play to win and realise that synergy, communication and alignment bind us <span><br /></span> together.</p>
<div className="ngoni">
    <h2>C.E.O:</h2>
    <p>Mazango</p>
</div>
                </div>
            </div>
        </>
    )
}

export default AboutContent
