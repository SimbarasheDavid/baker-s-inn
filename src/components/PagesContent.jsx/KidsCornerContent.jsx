import React from 'react'
import kidcornet from '../../assets/images/Kidds Corner.png'
import actors from '../../assets/images/GAMES.png'
import game1 from '../../assets/images/Rectangle 382.png'
import risky from '../../assets/images/Group 315.png'
import pacman from '../../assets/images/pacman.png'
import { Link } from 'react-router-dom'
const KidsCornerContent = () => {
  return (
    <>
      <div id="cornet">
        <div className="character">
            <img src={kidcornet} alt="" />
        </div>
       <div className="characters">
        <img src={actors} alt="" />
        </div> 
      </div>
      <div id="spaceship">
        <div className="space-text">
        <h2>Spaceship Maze</h2>
        <p>Help the spaceship through the maze to  get <span><br /></span> back to earth. Move through levels with <span><br /></span> increasing difficulty; each puzzle starts the ship <span><br /></span> in a different location. </p>
       <p>Develop kids’ skills in strategizing, spatial <span><br /></span> awareness, hand-eye coordination, problem <span><br /></span> solving and more! Free to play, priceless <span><br /></span> for learning.</p>
        <Link to='https://toytheater.com/maze/'><button>PLAY GAME</button></Link>
        </div>
        <div className="space-game">
            <img src={game1} alt="" />
        </div>

      </div>
      <div id="risky-way">
        <div className="risky-text">
            <h2>Risky Way</h2>
            <p>Risky Way is a free instant game. The highways <span><br /></span> of the future are risky and if you want to <span><br /></span> survive you'll need to be smarter than all of <span><br /></span> them combined. All you have to do in this <span><br /></span> nerve-tingling racing game is click, hold, and let <span><br /></span> go. Of course, if you want to be an effective <span><br /></span> driver who is able to survive you'll have to <span><br /></span> know when to click, how long to hold, <span><br /></span>  and only let go at the appropriate time.</p>
            <button>PLAY GAME</button>
        </div>
        <div className="risky">
            <img src={risky} alt="" />
        </div>
      </div>
      <div id="pacman">
        <div className="pacman-text">
            <h2>Pacman</h2>
            <p>There's nothing like a little old school Pacman <span><br /></span> game right? The great arcade game Pac Man <span><br /></span> was ported to the NES in 1988 and you can <span><br /></span> play it right here. Never played before?! What?! <span><br /></span> Eat all the pellets to complete a stage <span><br /></span> while trying to score as many points as possible <span><br /></span> by eating fruit and ghosts along the way! But <span><br /></span> there's more! Ever wonder how Pacman got <span><br /></span> started? Check out the history of Pacman <span><br /></span> below and see how it all began.</p>
            <Link to='https://www.pacman1.net/'><button>PLAY GAME</button></Link>
        </div>
        <div className="pac">
            <img src={pacman} alt="" />
        </div>
      </div>
    </>
  )
}

export default KidsCornerContent
