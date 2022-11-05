import MainMenu from '../components/MainMenu'
import Game from '../components/Game'
import {useState} from 'react'

export default function Home() {
  const [config, setConfig] = useState(null)

  const handleStart = (config) => {
    setConfig(config)
  }

  const handleOnMainMenu = () => {
    setConfig(null)
  }

  return (
    <>
      {config ? <Game config={config} onMainMenu={handleOnMainMenu}/> : <MainMenu onStart={handleStart}/>}
    </>
  )
}
