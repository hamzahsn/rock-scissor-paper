import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Paper from '../../assets/paper.svg'
import styles from './ComputerHandResults.scss'
import Scissor from '../../assets/scissors.svg'
import Rock from '../../assets/rock.svg'
import Question from '../../assets/question.svg'
import { RootState } from '../../store/store'
import { useRenderRandomWeapon } from '../../hooks/useRanderRandomWeapon'
import { setComputerHandResult, setScore } from '../../store/actions/actions'

export const ComputerHandResults: React.FC = () => {
  const dispatch = useDispatch()
  const game = useSelector((state: RootState) => state.game)
  const { weapon, launchGame } = useRenderRandomWeapon()
  const [finishRender, setFinishRender] = useState(false)

  useLayoutEffect(() => {
    if (game.players.user.name === 'Computer') {
      if (!game.startPlay) {
        dispatch(setComputerHandResult(weapon))
        setFinishRender(true)
      }
    }
  }, [weapon])

  useEffect(() => {
    if (finishRender) {
      if (!game.startPlay) {
        dispatch(setScore(game.players.user.weapon, game.players.computer.weapon))
        setFinishRender(false)
      }
    }
  }, [game.players.computer.weapon, game.players.user.weapon, finishRender, setFinishRender, game.startPlay, dispatch])

  //################################################################

  useEffect(() => {
    //@ts-ignore
    dispatch(setComputerHandResult(weapon))
  }, [game?.startPlay, weapon])

  useEffect(() => {
    if (game?.startPlay) {
      launchGame()
    }

    if (!game?.startPlay && game.players.user.name !== 'Computer') {
      //@ts-ignore
      dispatch(setScore(game.players.user.weapon, weapon))
    }
  }, [game?.startPlay, dispatch])

  // ################################################################
  const RenderComputerWeaponIcons = () => {
    return (
      <img
        src={
          game.players.computer.weapon === 0
            ? Rock
            : game.players.computer.weapon === -1
            ? Paper
            : game.players.computer.weapon === 1
            ? Scissor
            : Question
        }
        alt="weapon"
        data-testid="weapon-image"
        className={styles.computerHandImage}
      />
    )
  }

  return (
    <div className={styles.computerResultsContainer}>
      <RenderComputerWeaponIcons />
    </div>
  )
}
