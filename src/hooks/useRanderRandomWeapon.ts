import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { generateRandomWeapon } from '../utils/renderRandomWeapon'
import { roundFinish, setRoundNumber, setPreviousGames } from '../store/actions/actions'
import { RootState } from '../store/store'

export const useRenderRandomWeapon = () => {
  // const computerWeapon = useSelector((state: RootState) => state?.game?.players?.computer?.weapon)
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
        // TODO using previous games action
        // dispatch(setPreviousGames())
      }
    }, 100)
  }

  return { weapon, launchGame }
}
