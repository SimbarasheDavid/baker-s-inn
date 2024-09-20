import React from 'react'
import data from '../../../data/scone'
const SconeCard = () => {
  return (
    <>
      {data && data.SconeCard.map(card =>{
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

export default SconeCard
