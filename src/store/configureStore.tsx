import { configureStore } from 'redux-starter-kit'
import { Middleware } from 'redux'
import thunk from 'redux-thunk'
import immutableStateInvariant from 'redux-immutable-state-invariant'
import rootReducer, { IAppState } from './reducer'

const middleware: Middleware[] = [thunk]

if (process.env.NODE_ENV !== 'production') {
  middleware.concat(immutableStateInvariant())
}

export default (initialState?: IAppState) => configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  middleware
})
