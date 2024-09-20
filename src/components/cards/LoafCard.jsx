import React from 'react'
import data from '../../../data/bread'
const LoafCard = () => {
  return (
    <>
      {data && data.LoafCard.map(card => {
        return(
            <div className="Loafcard">
                <div className="premium">

                
                <div className="loafa">
                    <img src={card.image} alt="" />
                </div>
                <div className="loaftexto">
                    <h2>{card.title}</h2>
                    <p>{card.desc}</p>
                </div>
            </div>
            </div>
        )
      })}
    </>
  )
}

export default LoafCard
