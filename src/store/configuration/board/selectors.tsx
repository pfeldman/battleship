import { createSelector } from 'reselect'
import { IAppState } from 'store/reducer'
import { IBoard } from './initialState'

export const getBoardConfiguration = createSelector(
  (state: IAppState): IBoard => state.configuration.board,
  (board: IBoard): IBoard => board
)
