import React, { useEffect } from 'react'
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
  const game = useSelector((state: RootState) => state)
  const { weapon, launchGame } = useRenderRandomWeapon()

  useEffect(() => {
    //@ts-ignore
    dispatch(setComputerHandResult(weapon))
  }, [game?.game?.startPlay, weapon])

  useEffect(() => {
    if (game?.game?.startPlay) {
      launchGame()
    }

    if (!game?.game?.startPlay && game.game.players.user.name !== 'Computer') {
      //@ts-ignore
      dispatch(setScore(game.game.players.user.weapon, weapon))
    }
  }, [game?.game?.startPlay, dispatch])

  const RenderIconWhenComputerVsComputer = () => {
    return (
      <img
        src={
          game.game.players.computer.weapon === 0
            ? Rock
            : game.game.players.computer.weapon === -1
            ? Paper
            : game.game.players.computer.weapon === 1
            ? Scissor
            : Question
        }
        alt="weapon"
        data-testid="weapon-image"
        className={styles.computerHandImage}
      />
    )
  }

  const RenderIconWhenUserVsComputer = () => {
    return (
      <img
        src={weapon === 0 ? Rock : weapon === -1 ? Paper : weapon === 1 ? Scissor : Question}
        alt="weapon"
        data-testid="weapon-image"
        className={styles.computerHandImage}
      />
    )
  }

  return (
    <div className={styles.computerResultsContainer}>
      {game.game.players.user.name === 'Computer' ? (
        <RenderIconWhenComputerVsComputer />
      ) : (
        <RenderIconWhenUserVsComputer />
      )}
    </div>
  )
}
