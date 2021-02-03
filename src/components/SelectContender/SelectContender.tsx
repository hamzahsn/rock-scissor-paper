import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUser, setWeapon, endGame } from '../../store/actions/actions'
import { IPlayer } from '../../store/actions/actionTypes'

import { useForm } from 'react-hook-form'
import styles from './SelectContender.scss'
import { Button, LabelInput, Weapons } from '@components/index'
import { StartPlay } from '../../store/actions/actions'

export const SelectContender = () => {
  const [player, setPlayer] = useState<IPlayer>({
    name: '',
    score: 0,
    weapon: null
  })

  const [steps, setSteps] = useState<number>(0)

  const { register, errors, handleSubmit } = useForm()
  const dispatch = useDispatch()

  const handlePlayerInput = (event: React.ChangeEvent<HTMLInputElement>, field: keyof IPlayer) => {
    setPlayer({
      ...player,
      [field]: event.target.value
    })
  }

  const handlePlayerName = () => {
    dispatch(setUser(player.name))
    setSteps(2)
  }

  const handleSelect = event => {
    if (event.target.value === 'Player') {
      setSteps(1)
    } else {
      setSteps(3)
    }
  }

  const handleComputerPlayer = () => {
    dispatch(setUser('Computer'))
    dispatch(StartPlay())
  }

  const handlePlayerWeapon = (weapon: number) => {
    setPlayer({ ...player, weapon: weapon })
    dispatch(setWeapon(weapon))
  }

  const handlePlayerSubmit = () => {
    dispatch(StartPlay())
  }

  return (
    <form className={styles.contenderForm} onSubmit={handleSubmit(handlePlayerSubmit)}>
      <div className={styles.selectContender}>
        <select onChange={event => handleSelect(event)}>
          <option value="select">select Player</option>
          <option value="Player">You Play</option>
          <option value="Computer">Computer</option>
        </select>
      </div>
      {steps === 1 && (
        <div className={styles.playerInformation}>
          <LabelInput
            id="player"
            type="text"
            name="player"
            labelText=""
            placeholder="Add your name"
            data-testid="player"
            defaultValue={player.name}
            register={register({
              required: true,
              pattern: {
                value: /^[a-z]+$/i,
                message: 'player name is invalid'
              }
            })}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => handlePlayerInput(event, 'name')}
          />
          {errors.name && (
            <p data-testid="player-error" className={styles.error}>
              {errors.name.message}
            </p>
          )}
          <Button disabled={player.name === ''} type="button" onClick={handlePlayerName}>
            Start the game!
          </Button>
        </div>
      )}
      {steps === 2 && (
        <div className={styles.selectWeaponContainer}>
          <Weapons handlePlayerWeapon={handlePlayerWeapon} />
          <Button disabled={player.weapon === null} type="button" onClick={() => dispatch(StartPlay())}>
            Let&apos;s play!
          </Button>
          <Button type="button" onClick={() => dispatch(endGame())}>
            Play new game
          </Button>
        </div>
      )}
      {steps === 3 && (
        <div className={styles.selectWeaponContainer}>
          <Button type="button" onClick={handleComputerPlayer}>
            Let&apos;s play
          </Button>
          <Button type="button" onClick={() => dispatch(endGame())}>
            Play new game
          </Button>
        </div>
      )}
    </form>
  )
}
