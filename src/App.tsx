import React from 'react'
import { Game, GameResultsHistory } from '@containers/index'
import { Music } from '@components/index'
import styles from './App.scss'

export function App() {
  return (
    <>
      <Music />
      <div className={styles.gamesContainer}>
        <Game />
        <GameResultsHistory />
      </div>
    </>
  )
}
