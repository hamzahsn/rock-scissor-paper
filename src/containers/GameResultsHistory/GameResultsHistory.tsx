import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import styles from './GameResultsHistory.scss'

export const GameResultsHistory: React.FC = () => {
  const computer = useSelector((state: RootState) => state.game.players.computer)
  const player = useSelector((state: RootState) => state.game.players.user)

  return (
    <div className={styles.gameResultsHistoryContainer}>
      {player?.name && <p>{player?.name.toUpperCase()}</p>}
      <p>{computer?.name.toUpperCase()}</p>
      <p>{player?.score !== 0 && player?.score}</p>
      <p>{computer?.score}</p>

      {/* <div className={styles.resultContainer}></div> */}
      {/* {game.game?.players?.user?.name && (
        <div className={styles.userPlayer}>
          <p>{game?.game?.players?.user?.name.toUpperCase()}</p>
          <p>{game?.game?.players?.user?.score}</p>
        </div>
      )}

      <div className={styles.computerPlayer}>
        <p>{game?.game?.players?.computer?.name.toUpperCase()}</p>
        <p>{game?.game?.players?.computer?.score}</p>
      </div> */}
      {/* <p>Round: {game?.game?.round !== 0 && game?.game?.round}</p> */}
      {/* <div className={styles.scoreContainer}>
        <p>Score: {game?.game?.players?.user?.score}</p>:<p>{game?.game?.players?.computer?.score}</p>
      </div> */}
    </div>
  )
}
