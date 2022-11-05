import styles from './PlayerScores.module.css'

const PlayerRow = ({scores, rounds, number}) => {
    
    let total = scores ? scores.reduce((a,z)=>a+z,0) : 0

    return (<>
        <div className={styles.row}>
            <div className={styles.name}>Player {number}</div>
            { rounds.map((round, i) => {
                return (
                    <div key={i} className={styles.square}>{scores[i] ? scores[i] : '-'}</div>
                )
            })}
            <div className={styles.square}>{total}</div>
        </div>
    </>)
}

export default PlayerRow