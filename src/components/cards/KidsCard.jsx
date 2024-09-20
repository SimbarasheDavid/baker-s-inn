import React from 'react'
import data from '../../../data/kids'
const KidsCard = () => {
  return (
    <>
            {data && data.KidsCard.map(card =>{
        return(
            <div className="KidsCard">
                <div className="pic-sand">
                    <img src={card.image} alt="" />
                </div>
                <div className="texto">
                    <h3>{card.title}</h3>
                    <p>{card.desc}<span>{card.time}</span></p>
                    <p>{card.desc1} <span className=''>{card.time1}</span></p>
                    <div className="pic-arrow">
                        <img src={card.image1} alt="" />
                    </div>
                </div>
            </div>
        )
      })}
    </>
  )
}

export default KidsCard
