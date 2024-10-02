import React from 'react'
import data from '../../../data/family'
import { useState } from 'react'
import '../../components/cards/familly.css'
import warma from '../../assets/images/shortbread.png'
import '../../modal.scss'
import clock from '../../assets/images/Group 317.png'
import forkknife from '../../assets/images/Group 316.png'
import progbar from '../../assets/images/Group 318.png'
const FamilyCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
      {data && data.FamilyCard.map(card => {
        return (
          <div className="KidsCard">
            <div className="pic-sand">
              <img src={card.image} alt="" />
            </div>
            <div className="texto">
              <h3>{card.title}</h3>
              <p>{card.desc}<span>{card.time}</span></p>
              <p>{card.desc1} <span>{card.time1}</span></p>
              <div className="pic-arrow">


                <button onClick={toggleModal} className="pic-arrow open-modal-button">
                  <img src={card.image1} alt="" />
                </button>
                {isOpen && (
                  <div className='modal-overlay' onClick={toggleModal}>
                    <div className='modal-content' onClick={e => e.stopPropagation()}>
                      <span className='close-button' onClick={toggleModal}>&times;</span>
                      <div className="schwarm-container">
                        <div className="schwarma-piccs">
                          <div className="one-schwarma">
                            <img src={warma} alt="" />
                          </div>
                          <div className="four-schwarma">
                            <div className="each">
                              <img src={warma} alt="" />
                            </div>
                            <div className="each">
                              <img src={warma} alt="" />
                            </div>
                            <div className="each">
                              <img src={warma} alt="" />
                            </div>
                            <div className="each">
                              <img src={warma} alt="" />
                            </div>
                          </div>

                        </div>
                        <div className="ingredients-container">
                          <h2>Sweet Shortbread</h2>
                          <div className="six-minutes">
                            <div className="five-mins">
                              <div className="mins-img">
                                <img src={clock} alt="" />
                              </div>
                              <h3>5 Minutes</h3>
                            </div>
                            <div className="six-pipo">
                              <div className="six-img">
                                <img src={forkknife} alt="" />
                              </div>
                              <h3>6 People</h3>
                            </div>
                          </div>
                          <div className="ingredients">
                            <h3>Ingredients</h3>
                            <div className="prog-bar">
                              <img src={progbar} alt="" />
                            </div>
                          </div>
                          <div className="halves">
                            <div className="one-half">
                              <p>½ cup olive oil</p>
                              <p>½ cup ranch dressing</p>
                              <p>3 tablespoons Worcestershire sauce</p>
                              <p>1 tablespoon minced fresh rosemary</p>
                            </div>
                            <div className="snd-half">
                              <p>2 teaspoons salt</p>
                              <p>1 teaspoon lemon juice</p>
                              <p>1 teaspoon white vinegar</p>
                              <p>¼ teaspoon ground black pepper</p>
                            </div>
                          </div>
                          <div className="directions">
                            <h3>Directions</h3>
                            <div className="prog-bar">
                              <img src={progbar} alt="" />
                            </div>
                          </div>
                          <div className="stepps">
                            <div className="step-one">
                              <h3>Step 1</h3>
                              <p>In a medium bowl, stir together the olive oil,<span><br /></span> ranch dressing, Worcestershire sauce,<span><br /></span>  rosemary, salt, lemon juice, white vinegar,<span><br /></span>  pepper, and sugar. Let stand for 5 minutes.<span><br /></span>  Place chicken in the bowl, and stir to coat <span><br /></span>  with the marinade. Cover and refrigerate for <span><br /></span>  30 minutes.</p>
                            </div>
                            <div className="step-two">
                              <h3>Step 2</h3>
                              <p>`Preheat the grill for medium-high heat. Thread<span><br /></span>  chicken onto skewers and discard marinade.</p>
                            </div>
                            <div className="step-three">
                              <h3>Step 3</h3>
                              <p>Lightly oil the grill grate. Grill skewers for 8 to<span><br /></span> 12 minutes, or until the chicken is no longer<span><br /></span> pink in the center, and the juices run clear.</p>
                            </div>
                          </div>
                        </div>
                      </div>
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

export default FamilyCard
