import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'store/configureStore'
import Background from 'components/Background'
import LayoutRoute from 'components/LayoutRoute'
import GlobalStyles from './globalStyles'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Game from 'scenes/Game'
import Settings from 'scenes/Settings'
import Statics from 'scenes/Statics'

const App: React.FC = () => {
  const store = configureStore()

  return (
    <Router>
      <Provider store={store}>
        <Background className="App">
          <GlobalStyles />
          <Switch>
            <Route exact path='/'>
              <Redirect to='/game' />
            </Route>
            <LayoutRoute path='/game' component={Game} />
            <LayoutRoute path='/settings' component={Settings} />
            <LayoutRoute path='/statics' component={Statics} />
          </Switch>
        </Background>
      </Provider>
    </Router>
  );
}

export default App;
