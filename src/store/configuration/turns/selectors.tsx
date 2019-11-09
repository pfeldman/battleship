import { createSelector } from 'reselect'
import { IAppState } from 'store/reducer'
import { ITurns } from './initialState'

export const getTurns = createSelector(
  (state: IAppState): ITurns => state.configuration.turns,
  (turns: ITurns): number => turns.total
)

export const getOriginalTurns = createSelector(
  (state: IAppState): ITurns => state.configuration.turns,
  (turns: ITurns): number => turns.original
)

