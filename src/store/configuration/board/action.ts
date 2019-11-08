import { Action } from 'redux-starter-kit'
import { setBoardConfiguration } from '.'
import { ThunkAction } from 'redux-thunk'
import { IAppState } from 'store/reducer'

export const saveBoardConfiguration = (rows: number, columns: number):ThunkAction<void, IAppState, null, Action<string> > => {
  return dispatch => {
    dispatch(setBoardConfiguration({
      rows,
      columns
    }))
  }
}
