import React from 'react'
import { IPlayer } from 'store/actions/actionTypes'
import styles from './PlayerInfo.scss'

interface IPlayerInfo {
  player: IPlayer | undefined
}

export const PlayerInfo: React.FC<IPlayerInfo> = ({ player }) => {
  return (
    <div className={styles.playerBox}>
      <div data-testid="player-name" className={styles.playerBoxName}>
        {player && player.name.toUpperCase()}
      </div>
      <div data-testid="player-score" className={styles.playerBoxScore}>
        {player && player.score}
      </div>
    </div>
  )
}
