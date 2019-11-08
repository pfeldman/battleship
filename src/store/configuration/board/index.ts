import { createSlice, PayloadAction } from 'redux-starter-kit'
import initialState, { IBoard } from './initialState'

const board = createSlice({
  name: 'configuration/board',
  initialState,
  reducers: {
    setBoardConfiguration: (state: IBoard, { payload }: PayloadAction<IBoard>) => {
      state.rows = payload.rows
      state.columns = payload.columns
    }
  }
})

export const {
  setBoardConfiguration,
} = board.actions

export default board.reducer
