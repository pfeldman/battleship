import { Action } from 'redux-starter-kit'
import { setTurns, setOriginalTurns } from '.'
import { ThunkAction } from 'redux-thunk'
import { IAppState } from 'store/reducer'

export const takeOutTurn = ():ThunkAction<void, IAppState, null, Action<string> > => {
  return dispatch => {
    dispatch(setTurns({}))
  }
}

export const resetTurns = (turns: number):ThunkAction<void, IAppState, null, Action<string> > => {
  return dispatch => {
    dispatch(setTurns({ turns }))
  }
}

export const defineTurns = (turns: number):ThunkAction<void, IAppState, null, Action<string> > => {
  return dispatch => {
    dispatch(setOriginalTurns({ turns }))
  }
}
