import {
  GameActionTypes,
  IGameRock,
  SET_USER,
  START_GAME,
  FINISH_ROUND,
  SET_COMPUTER_HAND_RESULT,
  SET_WEAPON,
  SET_SCORE,
  SET_ROUND_NUMBER,
  END_GAME
} from '../actions/actionTypes'

const weapons = {
  rock: 0,
  paper: -1,
  scissors: 1
}

const initialWeapon = Object.values(weapons)

const initialState: IGameRock = {
  game: {
    players: {
      computer: {
        name: 'computer',
        weapon: null,
        score: 0
      },
      user: {
        name: '',
        weapon: null,
        score: 0
      }
    },
    startPlay: false,
    winner: '',
    round: 0,
    DrawValue: initialWeapon.length + 1
  },
  previousGames: []
}

const rootReducer = (state: IGameRock | undefined = initialState, action: GameActionTypes): IGameRock => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        game: {
          ...state.game,
          players: {
            ...state.game.players,
            user: {
              ...state.game.players.user,
              name: action.payload
            }
          }
        }
      }
    case SET_WEAPON:
      return {
        ...state,
        game: {
          ...state.game,
          players: {
            ...state.game.players,
            user: {
              ...state.game.players.user,
              weapon: action.payload
            }
          }
        }
      }
    case START_GAME:
      return {
        ...state,
        game: {
          ...state.game,
          startPlay: true
        }
      }
    case FINISH_ROUND:
      return {
        ...state,
        game: {
          ...state.game,
          startPlay: false
        }
      }
    case SET_COMPUTER_HAND_RESULT:
      return {
        ...state,
        game: {
          ...state.game,
          players: {
            ...state.game.players,
            computer: {
              ...state.game.players.computer,
              weapon: action.weapon
            }
          }
        }
      }
    case SET_SCORE:
      return {
        ...state,
        game: {
          ...state.game,
          players: {
            ...state.game.players,
            computer: {
              ...state.game.players.computer,
              score:
                action.payload !== undefined && action.payload === state.game.players.computer.weapon
                  ? state.game.players.computer.score + 1
                  : state.game.players.computer.score
            },
            user: {
              ...state.game.players.user,
              score:
                action.payload !== undefined && action.payload === state.game.players.user.weapon
                  ? state.game.players.user.score + 1
                  : state.game.players.user.score
            }
          }
        }
      }
    case SET_ROUND_NUMBER:
      return {
        ...state,
        game: {
          ...state.game,
          round: state.game.round + 1
        }
      }
    // TODO  here set previous games
    case END_GAME:
      return { ...initialState }
    // TODO clearing storage
    // return storage.removeItem('persist:root')
    default:
      return state
  }
}

export default rootReducer
