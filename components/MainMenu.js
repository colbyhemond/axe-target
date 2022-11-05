import styles from './MainMenu.module.css'
import {useState} from 'react'

export default function MainMenu({onStart}) {
  const [rounds, setRounds] = useState(10)
  const [players, setPlayers] = useState(1)
  const [next, setNext] = useState(false)
  const [editable, setEditable] = useState(false);
  const [config, setConfig] = useState({players:[]})

  const removePlayer = () => {
    if (players > 1) {
      setPlayers(players - 1)
    }
  }

  const addPlayer = () => {
    if (players < 4) {
      setPlayers(players + 1)
    }
  }

  const handleStart = () => {

    for (let i = 0; i < players; i++) {
      let playerElement = document.getElementById(`player_${i}`)

      const player = {
        id: playerElement.id,
        name: playerElement.innerText,
        score: 49
      }
      config.players.push(player)
      
    }
    onStart(config)
  }

  const handleNext = () => {
    setNext(true)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
        setEditable(false)
    }
  }

  const handleFocusOut = (e) => {
    
    setConfig(config)
    
    setEditable(false);
  }

  const handleOnClick = (e) => {
    setEditable(true)
    document.getElementById(e.target.id).focus()
  }

  return (<>
    { next == true ? 
        <div className={styles.screen}>
          {[...Array(players)].map((val, idx) => (
            <>
            <div className={styles.playername} id={`player_${idx}`} contentEditable={editable} tabIndex="0" suppressContentEditableWarning onKeyPress={handleKeyPress} onBlur={handleFocusOut} onClick={handleOnClick} onTouchStartCapture={handleOnClick}>
              Player {idx+1}
            </div>
           
            </>
          ))}
          <div className={styles.cursor} onClick={handleStart}>{`Start Game`}</div>
        </div>
      : 
      <div className={styles.screen}>
        <h1>Main Menu</h1>
        <div>Players</div>
        <div className={styles.playersnumber}>{players}</div>
        <div className={styles.setting}>
            <div className={styles.cursor} onClick={removePlayer}>-</div>
            <div>Players</div>
            <div className={styles.cursor} onClick={addPlayer}>+</div>
        </div>
        
        <div className={styles.cursor} onClick={handleNext}>{`Next ->`}</div>
    </div>
    }
    </>
  )
}
