import { combineReducers } from 'redux'
import { IBoard } from './board/initialState'
import board from './board'
import turns from './turns'
import { ITurns } from './turns/initialState'

export interface IConfigurationState {
  board: IBoard,
  turns: ITurns
}

export default combineReducers({
  board,
  turns
})
