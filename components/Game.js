import styles from './Game.module.css'
import Player from './Player'
import {useState, useEffect} from 'react'

export default function Game({config, onMainMenu}) {
  const [currentPlayer, setCurrentPlayer] = useState(1)
  const [winner, setWinner] = useState(null)

  useEffect(() => {
      console.log(config);
      setCurrentPlayer(config.players[0])
  }, [])

  const isCurrentPlayer = (element) => element.id === currentPlayer.id;

  const handleEndOfTurn = () => {
    //make new score flash a few times then move to next player
    nextPlayer()
  }

  const handleBust = () => {
    //make bust flash a few times then move to next player
    nextPlayer()
  }

  const nextPlayer = () => {
    let playerIndex = config.players.findIndex(isCurrentPlayer)
    
    if (currentPlayer.score === 0) {
      setWinner(currentPlayer)
      return;
    }

    if (playerIndex === config.players.length-1) {
      setCurrentPlayer(config.players[0])
    } else {
      setCurrentPlayer(config.players[playerIndex+1])
    }
  }

  const renderPlayer = (player) => {
    return <Player player={player} onEndOfTurn={handleEndOfTurn} onBust={handleBust}/>
  }

  const renderWinner = (winner) => {
    return <div class={styles.winnerContainer}><h1>{winner.name}</h1><br/><h2>wins!</h2></div>
  }

  return (
    <div className={styles.screen}>
        <div className={styles.cursor} onClick={onMainMenu}>{`<- Main Menu`}</div>
        {winner ? (
          renderWinner(winner)
        ) : (
          renderPlayer(currentPlayer)
        )}
      
    </div>
  )
}
