import React from 'react';
import Background from 'components/Background'
import LayoutRoute from 'components/LayoutRoute'
import GlobalStyles from './globalStyles'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Game from 'scenes/Game'

const App: React.FC = () => {
  return (
    <Router>
      <Background className="App">
        <GlobalStyles />
        <Switch>
          <Route exact path='/'>
            <Redirect to='/game' />
          </Route>
          <LayoutRoute path='/game' component={Game} />
        </Switch>
      </Background>
    </Router>
  );
}

export default App;
