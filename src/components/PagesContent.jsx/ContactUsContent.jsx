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
                            <td className="text-[#261B6C] font-bold ">Chinhoyi Depot</td>
                            <td className="text-[#261B6C]" style={{ borderLeft: '1px solid #261B6C' }}>94/95 Josiah Tongogara St, Industrial Site, Chinhoyi</td>
                            <td className="text-[#261B6C] font-bold " style={{ borderLeft: '1px solid #261B6C' }}>0772 318 309</td>
                        </tr>
                        <tr>
                            <td className="text-[#261B6C] font-bold ">Bindura Depot</td>
                            <td className="text-[#261B6C]" style={{ borderLeft: '1px solid #261B6C' }}>461 Luton Road, Industrial Site, Bindura</td>
                            <td className="text-[#261B6C] font-bold " style={{ borderLeft: '1px solid #261B6C' }}>066 2107317</td>
                        </tr>
                        <tr>
                            <td className="text-[#261B6C] font-bold ">Murehwa Depot</td>
                            <td className="text-[#261B6C]" style={{ borderLeft: '1px solid #261B6C' }}>Stand number 351 Murehwa Growth Point</td>
                            <td className="text-[#261B6C] font-bold " style={{ borderLeft: '1px solid #261B6C' }}>0652 122 514</td>
                        </tr>
                        <tr>
                            <td className="mutare">Mutare Depot</td>
                            <td className="text-[#261B6C]" style={{ borderLeft: '1px solid #261B6C' }}>5-7 Glasgow Road, Industrial Site, Mutare</td>
                            <td className="text-[#261B6C] font-bold " style={{ borderLeft: '1px solid #261B6C' }}>020 60715</td>
                        </tr>
                        <tr>
                            <td className="hwange1">Hwange Depot</td>
                            <td className="hwange2">29 Derby Drive, Hwange Industrial Site</td>
                            <td className="hwange3">0281 2820105</td>
                        </tr>
                        <tr>
                            <td className="text-[#261B6C] font-bold ">Chiredzi Depot</td>
                            <td className="text-[#261B6C]" style={{ borderLeft: '1px solid #261B6C' }}>329 Lion Drive, Chiredzi</td>
                            <td className="text-[#261B6C] font-bold " style={{ borderLeft: '1px solid #261B6C' }}>0231 231 2709</td>
                        </tr>

                        <tr>
                            <td className="text-[#261B6C] font-bold ">Murehwa Depot</td>
                            <td className="text-[#261B6C] " style={{ borderLeft: '1px solid #261B6C' }}>1310 Mineral Road, Masvingo</td>
                            <td className="text-[#261B6C] font-bold " style={{ borderLeft: '1px solid #261B6C' }}>0652 122 514</td>
                        </tr>
                        <tr>
                            <td className="text-[#261B6C] font-bold ">Masvingo Depot</td>
                            <td className="text-[#261B6C] " style={{ borderLeft: '1px solid #261B6C' }}>Stand number 351 Murehwa Growth Point</td>
                            <td className="text-[#261B6C] font-bold " style={{ borderLeft: '1px solid #261B6C' }}>039 266 333</td>
                        </tr>
                        <tr>
                            <td className="text-[#261B6C] font-bold ">Gweru Depot</td>
                            <td className="text-[#261B6C] " style={{ borderLeft: '1px solid #261B6C' }}>1843 Main Street, Gweru</td>
                            <td className="text-[#261B6C] font-bold " style={{ borderLeft: '1px solid #261B6C' }}>054 2220 858</td>
                        </tr>
                        <tr>
                            <td className="text-[#261B6C] font-bold ">Zvishavane Depot</td>
                            <td className="text-[#261B6C] " style={{ borderLeft: '1px solid #261B6C' }}>Shabanie Mine Club, Noelville, Zvishavane</td>
                            <td className="text-[#261B6C] font-bold " style={{ borderLeft: '1px solid #261B6C' }}>0772 395567</td>
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
                <form action="" >
                    <div className="tittle">
                        <select name='title'>
                            <option value="" disabled selected>Your Title</option>
                            <option value="Mr">Mr</option>
                            <option value="Mrs">Mrs</option>
                        </select>
                        <div className="your">
                            <input type="text" placeholder='Your name' required />
                        </div>

                    </div>
                    <div className="fonNumber">
                        <div className="hone">
                            <input type="number" placeholder='Your Phone Number' required />
                        </div>
                        <div className="ail">
                            <input type="email" placeholder='Your Email' required />
                        </div>

                    </div>
                </form>
            </div>

        </>
    )
}

export default ContactUsContent
