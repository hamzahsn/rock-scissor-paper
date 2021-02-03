import {
  GameActionTypes,
  SET_USER,
  START_GAME,
  FINISH_ROUND,
  SET_COMPUTER_HAND_RESULT,
  SET_SCORE,
  SET_WEAPON,
  SET_ROUND_NUMBER,
  SET_PREVIOUS_GAMES,
  END_GAME
} from './actionTypes'
import { calculateWinner } from '../../utils/calculateGameResult'

export function setUser(newUser: string): GameActionTypes {
  return {
    type: SET_USER,
    payload: newUser
  }
}

export function setWeapon(weapon: number): GameActionTypes {
  return {
    type: SET_WEAPON,
    payload: weapon
  }
}

export function StartPlay(): GameActionTypes {
  return {
    type: START_GAME
  }
}

export function roundFinish(): GameActionTypes {
  return {
    type: FINISH_ROUND
  }
}

export function setComputerHandResult(weapon: number): GameActionTypes {
  return {
    type: SET_COMPUTER_HAND_RESULT,
    weapon: weapon
  }
}

export function setScore(firstPlayer: number, secondPlayer: number): GameActionTypes {
  const results = calculateWinner(firstPlayer, secondPlayer)
  return {
    type: SET_SCORE,
    payload: results
  }
}

export function setRoundNumber(): GameActionTypes {
  return {
    type: SET_ROUND_NUMBER
  }
}

export function setPreviousGames(): GameActionTypes {
  return {
    type: SET_PREVIOUS_GAMES
  }
}

export function endGame(): GameActionTypes {
  return {
    type: END_GAME
  }
}
