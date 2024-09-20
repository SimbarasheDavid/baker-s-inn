import React from 'react'
import data from '../../../data/donut'
const DonutCard = () => {
  return (
    <>
     {data && data.DonutCard.map(card => {
        return(
            <div className="Loafcard">
            <div className="loaf">
                <img src={card.image} alt="" />
            </div>
            <div className="loaftext">
                <h2>{card.title}</h2>
                <p>{card.desc}</p>
            </div>
            
        </div>   
        )
     })} 
    </>
  )
}

export default DonutCard
