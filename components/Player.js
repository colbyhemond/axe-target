import styles from './Player.module.css'
import {useState} from 'react'

export default function Player({player, onEndOfTurn, onBust}) {

  const minusOne = () => {
    let newScore = player.score - 1
    if(newScore < 0) {
      onBust()
    } else {
      player.score = newScore
      onEndOfTurn()
    }
  }

  const minusThree = () => {
    let newScore = player.score - 3
    if(newScore < 0) {
      onBust()
    } else {
      player.score = newScore
      onEndOfTurn()
    }
  }

  const minusFive = () => {
    let newScore = player.score - 5
    if(newScore < 0) {
      onBust()
    } else {
      player.score = newScore
      onEndOfTurn()
    }
  }

  console.log(player);

  return (
    <>
      <div className={styles.targetcontainer}>
        <div className={styles.target} id='target'>
          <div className={styles.target1} id='target1' onClick={minusOne}></div>
          <div className={styles.target3} id='target3' onClick={minusThree}></div>
          <div className={styles.target5} id='target5' onClick={minusFive}></div>
        </div>
      </div>
      <div className={styles.scoreboardcontainer}>
        <div className={styles.name}>{player.name}</div>
        <div className={styles.score}>{player.score}</div>
      </div>
    </>
  )
}
