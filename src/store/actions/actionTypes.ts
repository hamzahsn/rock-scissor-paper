export const START_GAME = 'START_GAME'
export const FINISH_ROUND = 'FINISH_ROUND'
export const SET_COMPUTER_HAND_RESULT = 'SET_COMPUTER_HAND_RESULT'
export const SET_SCORE = 'SET_SCORE'
export const SET_ROUND_NUMBER = 'SET_ROUND_NUMBER'
export const SET_PREVIOUS_GAMES = 'SET_PREVIOUS_GAMES'

export const RESTART_GAME = 'RESTART_GAME'
export const END_GAME = 'END_GAME'

// USER STEPS
export const SET_USER = 'SET_USER'
export const SET_WEAPON = 'SET_WEAPON'

export interface IPreviousGame {
  computer?: number
  user?: number
}

export interface IPlayer {
  name: string
  weapon: number | null
  score: number
}

export interface IGameRock {
  game: {
    players: {
      computer: IPlayer
      user: IPlayer
    }
    startPlay: boolean
    winner: string
    round: number
    DrawValue: number
  }
  previousGames: IPreviousGame[]
}

interface ISetUser {
  type: typeof SET_USER
  payload: string
}

interface ISetWeapon {
  type: typeof SET_WEAPON
  payload: number
}

interface IStartPlayAction {
  type: typeof START_GAME
}

interface IFinishRound {
  type: typeof FINISH_ROUND
}

interface ISetComputerHandResult {
  type: typeof SET_COMPUTER_HAND_RESULT
  weapon: number
}

interface ISetScore {
  type: typeof SET_SCORE
  payload: number
}

interface ISetRoundNumber {
  type: typeof SET_ROUND_NUMBER
}

// TODO
interface ISetPreviousGames {
  type: typeof SET_PREVIOUS_GAMES
}

interface IEndGame {
  type: typeof END_GAME
}

export type GameActionTypes =
  | ISetUser
  | ISetWeapon
  | ISetScore
  | ISetPreviousGames
  | IEndGame
  | ISetRoundNumber
  | IStartPlayAction
  | IFinishRound
  | ISetComputerHandResult
