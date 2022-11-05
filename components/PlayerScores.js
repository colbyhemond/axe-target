import PlayerRow from './PlayerRow'
import styles from './PlayerScores.module.css'

const PlayerScores = ({scores, rounds, players}) => {
    
    let total = scores ? scores.reduce((a,z)=>a+z,0) : 0

    const renderPlayers = (players) => {
        const pArr = []
        for (let i = 1; i <= players; i++) {
            pArr.push(<PlayerRow scores={scores} rounds={rounds} number={i}/>)
            
        }
        return pArr
    }

    return (<>
        <div className={styles.layout}>
            <div className={styles.row}>
                <div className={styles.name}>Round</div>
                { rounds.map((round, i) => {
                    return (
                        <div key={i} className={styles.square}>{round}</div>
                    )
                })}
                <div className={styles.square}></div>
            </div>
           
           {renderPlayers(players)}
            
   
        </div>
    </>)
}

export default PlayerScores