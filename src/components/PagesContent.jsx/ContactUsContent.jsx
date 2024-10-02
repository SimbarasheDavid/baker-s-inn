import React from 'react'
import tact from '../../assets/images/contact us.png'
import drop from '../../assets/images/Group 300.png'
import harare from '../../assets/images/hre factory.png'
import bulawayo from '../../assets/images/bwyo factory.png'
import enquire from '../../assets/images/enquire.png'

const ContactUsContent = () => {
    return (
        <>
            <div id="contact">
                <div className="contact-img">
                    <img src={tact} alt="" />
                </div>
                <div className="conta">
                    <h2>Contact Us</h2>
                    <div className="drop">
                        <img src={drop} alt="" />
                    </div>
                </div>
            </div>
            <div id="factories">
                <div className="hre-factory">
                    <div className="harare">
                        <img src={harare} alt="" />
                    </div>
                    <div className="hre-text">
                        <h2>Harare Bread Factory</h2>
                        <p>1 Shepperton Road, Graniteside, Harare</p>
                        <div className="dials">
                            <p>+263 242 710334, +263 242 751481,<span><br /></span>
                                +263 242 751572, +263 242 758659
                            </p>
                        </div>
                        <p>VOIP: 08677006178 <span><br /></span>
                            Econet Toll Free: 08080151, 08080152</p>
                    </div>
                </div>
                <div className="bwyo-factory">
                    <div className="bulawayo">
                        <img src={bulawayo} alt="" />
                    </div>
                    <div className="bwyo-text">
                        <h2>Bulawayo Bread Factory</h2>
                        <p>22 A Bellevue Road, Belmont, Bulawayo
                        </p>
                        <div className="dials">
                            <p>+263 9 78279, +263 9 68826, +263 9 68381,<span><br /></span>
                                +263 9 68383, +263 9 69592, +263 9 76693
                            </p>
                        </div>
                        <p>VOIP: 08677006179<span><br /></span>
                            Econet Toll Free: 08080151, 08080152</p>
                    </div>
                </div>
            </div>
            <div id="tables">
                <h2>List Of Baker's Inn Depots</h2>
                <table>
                    <thead>
                        <tr>
                            <th className="depot">Depot</th>
                            <th className="text">Address</th>
                            <th className="text">Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='chinho'>Chinhoyi Depot</td>
                            <td className="text-[#261B6C]" style={{ borderLeft: '1px solid #B2904C' }}>94/95 Josiah Tongogara St, Industrial Site, Chinhoyi</td>
                            <td className='chinho' style={{ borderLeft: '1px solid #B2904C' }}>0772 318 309</td>
                        </tr>
                        <tr>
                            <td className='chinho'>Bindura Depot</td>
                            <td className="text-[#261B6C]" style={{ borderLeft: '1px solid #B2904C' }}>461 Luton Road, Industrial Site, Bindura</td>
                            <td className='chinho' style={{ borderLeft: '1px solid #B2904C' }}>066 2107317</td>
                        </tr>
                        <tr>
                            <td className='chinho'>Murehwa Depot</td>
                            <td className="text-[#261B6C]" style={{ borderLeft: '1px solid #B2904C' }}>Stand number 351 Murehwa Growth Point</td>
                            <td className='chinho' style={{ borderLeft: '1px solid #B2904C' }}>0652 122 514</td>
                        </tr>
                        <tr>
                            <td className='chinho'>Mutare Depot</td>
                            <td className="text-[#261B6C]" style={{ borderLeft: '1px solid #B2904C' }}>5-7 Glasgow Road, Industrial Site, Mutare</td>
                            <td className='chinho' style={{ borderLeft: '1px solid #B2904C' }}>020 60715</td>
                        </tr>
                        <tr>
                            <td className="hwange1">Hwange Depot</td>
                            <td className="hwange2">29 Derby Drive, Hwange Industrial Site</td>
                            <td className="hwange3">0281 2820105</td>
                        </tr>
                        <tr>
                            <td className='chinho'>Chiredzi Depot</td>
                            <td className="text-[#261B6C]" style={{ borderLeft: '1px solid #B2904C' }}>329 Lion Drive, Chiredzi</td>
                            <td className='chinho' style={{ borderLeft: '1px solid #B2904C' }}>0231 231 2709</td>
                        </tr>

                        <tr>
                            <td className='chinho'>Murehwa Depot</td>
                            <td className="text-[#261B6C] " style={{ borderLeft: '1px solid #B2904C' }}>1310 Mineral Road, Masvingo</td>
                            <td className='chinho' style={{ borderLeft: '1px solid #B2904C' }}>0652 122 514</td>
                        </tr>
                        <tr>
                            <td className='chinho'>Masvingo Depot</td>
                            <td className="text-[#261B6C] " style={{ borderLeft: '1px solid #B2904C' }}>Stand number 351 Murehwa Growth Point</td>
                            <td className='chinho' style={{ borderLeft: '1px solid #B2904C' }}>039 266 333</td>
                        </tr>
                        <tr>
                            <td className='chinho'>Gweru Depot</td>
                            <td className="text-[#261B6C] " style={{ borderLeft: '1px solid #B2904C' }}>1843 Main Street, Gweru</td>
                            <td className='chinho' style={{ borderLeft: '1px solid #B2904C' }}>054 2220 858</td>
                        </tr>
                        <tr>
                            <td className='chinho'>Zvishavane Depot</td>
                            <td className="text-[#261B6C] " style={{ borderLeft: '1px solid #B2904C' }}>Shabanie Mine Club, Noelville, Zvishavane</td>
                            <td className='chinho' style={{ borderLeft: '1px solid #B2904C' }}>0772 395567</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div id="job">
                <div className="enqiure">
                    <img src={enquire} alt="" />
                </div>
                <div className="general">
                    <div className="job">
                        <h2>For job enquiries , email your CV to</h2>
                        <a href="">hr@bakersinnzim.com</a>
                    </div>
                    <div className="gene">
                        <h2>For general enquiries, email</h2>
                        <a href="">marketing@bakersinnzim.com</a>
                    </div>
                </div>
            </div>
            <div id="fallback">
                <h2>Request A Callback</h2>
                <p>Complete the form below and we will respond within 24 hours.</p>
                <div className="title">
                    <select name="your title" id="" >
                        <option value="" disabled selected>your title</option>
                        <option value="">Mrs</option>
                        <option value="">Mr</option>
                        <option value="">Dr</option>
                    </select>
                    <div className="put">
                        <input type="text" placeholder='your name' required/>
                    </div>
                    <div className="put-in">
                        <input type="numbers" placeholder='your phone number' required/>
                    </div>
                    <div className="puttin">
                        <input type="email" placeholder='your E-mail' required/>
                    </div>
                </div>
                <div className="interest">
                    <select name="Select Area of interest" id="" >
                        <option value="" disabled selected>Select Area of interest</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Support</option>
                        <option value="sales">Sales</option>
                    </select>
                    <select name="" id="">
                        <option value="" disabled selected>Nature of Enquiry</option>
                        <option value="question">Question</option>
                        <option value="feedback">Feedback</option>
                        <option value="complaint">Complaint</option>
                    </select>
                    <select name="" id="">
                        <option value="" disabled selected>Do you Want to be Contacted by phone</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    <textarea name="" id="" placeholder='your message'></textarea>
                </div>


            </div>

        </>
    )
}

export default ContactUsContent
