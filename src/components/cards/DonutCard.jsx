import React from 'react'
import data from '../../../data/donut'
const DonutCard = () => {
    return (
        <>
            {data && data.DonutCard.map(card => {
                return (
                    <div className="DonutCard">
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

export default DonutCard
