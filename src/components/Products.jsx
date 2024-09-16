import React from 'react'
import breads from '../assets/images/Rectangle 28.png'
import meatpie from '../assets/images/Rectangle 24.png'
import scones from '../assets/images/Rectangle 26.png'
import ring from '../assets/images/Rectangle 28.png'
const Products = () => {
  return (
    <div id='produce'>
      <h2>Our Product Range</h2>
      <div className="products-container">
        <div className="bread">
            <img src={breads} alt="" />
            <div className="overlay"></div>
            <p>Bread</p>
        </div>
        <div className="meat">
            <img src={meatpie} alt="" />
            <p>Meat Pies</p>
        </div>
        <div className="scone">
            <img src={scones} alt="" />
            <p>Scones</p>
        </div>
        <div className="donut">
            <img src={ring} alt="" />
            <p>Donuts</p>
        </div>
      </div>
      <button>VIEW COMPLETE RANGE</button>
    </div>
  )
}

export default Products
