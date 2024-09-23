import React from 'react'
import data from '../../../data/kids'
import '../../components/cards/kids.css'
import { useState } from 'react'



const KidsCard = () => {
  const [isOpen,setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  }
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
                      <button onClick={toggleModal} className='open-modal-button'>
                        <img src={card.image1} alt="" />

                      </button>

                      {isOpen &&(
                        <div className='modal-overlay' onClick={toggleModal}>
                          <div className='modal-content' onClick={e => e.stopPropagation()}>
                            <span className='close-button' onClick={toggleModal}>&times;</span>
                            <h2>Modalll</h2>
                          </div>
                        </div>
                      )}

                    </div>
                </div>
            </div>
        )
      })}
    </>
  )
}

export default KidsCard;
