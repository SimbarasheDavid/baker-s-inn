import React from 'react'
import data from '../../../data/teamwork'
const TeamCard = () => {
    return (
        <>
            {data && data.TeamCard.map(card => {
                return (
                    <div className="TeamCard">
                        <div className="img-one">
                            <img src={card.image} alt="" />
                        </div>
                        <div className="texts">
                            <h2>{card.title}</h2>
                            <p>{card.desc}</p>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default TeamCard
