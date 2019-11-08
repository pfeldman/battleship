import { AnyAction, combineReducers } from 'redux'
import configuration, { IConfigurationState } from './configuration'

export interface IAppState {
  configuration: IConfigurationState
}

const appReducer = combineReducers({
  configuration
})

const rootReducer = (state: IAppState | undefined, action: AnyAction): IAppState => {
  return appReducer(state, action)
}

export default rootReducer
