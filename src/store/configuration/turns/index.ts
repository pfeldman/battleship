import { createSlice, PayloadAction } from 'redux-starter-kit'
import initialState, { ITurns } from './initialState'

const turns = createSlice({
  name: 'configuration/turns',
  initialState,
  reducers: {
    setTurns: (state: ITurns, { payload }: PayloadAction<{turns?: number}>) => {
      state.total = payload.turns || state.total - 1
    },
    setOriginalTurns: (state: ITurns, { payload }: PayloadAction<{turns: number}>) => {
      state.original = payload.turns
    }
  }
})

export const {
  setTurns,
  setOriginalTurns
} = turns.actions

export default turns.reducer
