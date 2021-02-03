import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/store'
import styles from './UserHandResults.scss'
import Paper from '../../assets/paper.svg'
import Rock from '../../assets/rock.svg'
import Scissor from '../../assets/scissors.svg'
import Question from '../../assets/question.svg'
import { useRenderRandomWeapon } from '../../hooks/useRanderRandomWeapon'
import { setScore } from '../../store/actions/actions'

export const UserHandResults: React.FC = () => {
  const { weapon, launchGame } = useRenderRandomWeapon()
  const game = useSelector((state: RootState) => state?.game)
  const dispatch = useDispatch()

  React.useEffect(() => {
    if (game.players.user.name === 'Computer' && game.startPlay) {
      launchGame()
    }

    if (!game.startPlay && game.players.user.name === 'Computer') {
      dispatch(setScore(weapon, game.players.computer.weapon))
    }
  }, [game.players.user.name, game.players.computer.weapon, game.startPlay])

  const RenderUserIcon = () => {
    return (
      <img
        src={
          game.players.user.weapon === 0
            ? Rock
            : game.players.user.weapon === -1
            ? Paper
            : game.players.user.weapon === 1
            ? Scissor
            : Question
        }
        alt="weapon"
        className={styles.userHandImage}
        data-testid="user-hand"
      />
    )
  }

  const RenderComputerIcons = () => {
    return (
      <img
        src={weapon === 0 ? Rock : weapon === -1 ? Paper : weapon === 1 ? Scissor : Question}
        alt="weapon"
        className={styles.userHandImage}
        data-testid="user-hand"
      />
    )
  }
  return (
    <div className={styles.userResultsContainer}>
      {game.players.user.name !== 'Computer' ? <RenderUserIcon /> : <RenderComputerIcons />}
    </div>
  )
}
