import React from 'react'
import pro1 from '../assets/images/products4.png'
import pro2 from '../assets/images/products1.png'
import pro3 from '../assets/images/products2.png'
import pro4 from '../assets/images/products3.png'
const Product = () => {
    return (
        <>
            <div id="product">
                <h1>Our Product Range</h1>
                <div className="product-img">
                    <div className="prod-four">
                        <div className="imgs">
                            <img src={pro1} alt="" />
                        </div>
                        <div className="prod-text">
                            <p>Bread</p>
                        </div>
                    </div>
                    <div className="prod-four">
                        <div className="imgs">
                            <img src={pro2} alt="" />
                        </div>
                        <div className="prod-text">
                            <p>Meat Pies</p>
                        </div>
                    </div>
                    <div className="prod-four">
                        <div className="imgs">
                            <img src={pro3} alt="" />
                        </div>
                        <div className="prod-text">
                            <p>Scones</p>
                        </div>
                    </div>
                    <div className="prod-four">
                        <div className="imgs">
                            <img src={pro4} alt="" />
                        </div>
                        <div className="prod-text">
                            <p>Donuts</p>
                        </div>
                    </div>
                </div>
                <button>VIEW COMPLETE RANGE</button>
            </div>
        </>
    )
}

export default Product
