import React from 'react'
import mario from '../assets/images/new-super-mario-bros-2-super-paper-mario-png-favpng-rsGyK8GSVR5JcU6tF9nzJCgB8-removebg-preview 1.png'
import pattern from '../assets/images/African Pattern 1.png'
import pattern1 from '../assets/images/African Pattern 5.png'
import palm from '../assets/images/kisspng-arecaceae-leaf-palm-branch-palm-leaf-leaves-png-5ab1c5aa8368b7 1.png'
import shrooms from '../assets/images/2cd43b_19a192ae6ec44ffc9597044f7f063e0c_mv2 1.png'
import kidds from '../assets/images/Kids.png'
import corners from '../assets/images/Corner.png'
const KidsCorner = () => {
  return (
    <div id='kidCorner'>
      <div className="african">
        <div className="pattern">
          <img src={pattern} alt="" />
        </div>
        <div className="parten">
          <img src={pattern1} alt="" />
        </div>
      </div>
      <div className="palm">
        <img src={palm} alt="" />
      </div>
      <div className="marioo">
        <img src={mario} alt="" />
      </div>
      <div className="shroom">
        <img src={shrooms} alt="" />
      </div>
<div className="kidstext">
  <div className="cornerkids">
    <div className="img">
      <img src={kidds} alt="" />
    </div>
    <div className="img1">
      <img src={corners} alt="" />
    </div>
  </div>
  <p>Let your children join the fun. Explore a place with exciting games and the top winners stand a chance to win exciting monthly prizes!</p>
  <button>PLAY GAMES</button>
</div>

    </div>
  )
}

export default KidsCorner
