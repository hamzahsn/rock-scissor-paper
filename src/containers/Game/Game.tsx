import React from 'react'
import { UserHandResults, ComputerHandResults, PlayerInfo, SelectContender } from '@components/index'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import styles from './Game.scss'

export const Game: React.FC = () => {
  const game = useSelector((state: RootState) => state)

  return (
    <div className={styles.gameContainer}>
      <div className={styles.firstPlayerContainer}>
        <PlayerInfo player={game.game.players.user} />
        <UserHandResults />
      </div>
      <SelectContender />
      <div className={styles.secondPlayerContainer}>
        <PlayerInfo player={game.game.players.computer} />
        <ComputerHandResults />
      </div>
    </div>
  )
}
