import { combineReducers } from 'redux'
import { IBoard } from './board/initialState'
import board from './board'

export interface IConfigurationState {
  board: IBoard
}

export default combineReducers({
  board
})
