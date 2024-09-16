import React from 'react'
import data from '../../../data/bread'
const LoafCard = () => {
    return (
        <>
            {data && data.LoafCard.map(card => {
                return (
                    <div className="LoafCard">
                        <div className="loaf">
                            <img src={card.image} alt="" />
                        </div>
                        <div className="tetbox">
                            <h2>{card.title}</h2>
                            <p>{card.desc}</p>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default LoafCard
