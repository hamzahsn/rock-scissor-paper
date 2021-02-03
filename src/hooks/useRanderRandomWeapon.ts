import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { generateRandomWeapon } from '../utils/renderRandomWeapon'
import { roundFinish, setRoundNumber } from '../store/actions/actions'

export const useRenderRandomWeapon = () => {
  const [weapon, setWeapon] = useState<number | null>()
  const dispatch = useDispatch()

  const launchGame = () => {
    let counter = 0
    const gameInterval = setInterval(() => {
      counter++
      const randomWeapon = generateRandomWeapon()
      setWeapon(randomWeapon)
      if (counter > 10) {
        clearInterval(gameInterval)
        dispatch(roundFinish())
        dispatch(setRoundNumber())
      }
    }, 100)
  }

  return { weapon, launchGame }
}
