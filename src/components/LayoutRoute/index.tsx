import React from 'react'
import { Route, RouteProps, Link } from 'react-router-dom'
import { Nav, Header } from './styled'

const LayoutRoute: React.FC<RouteProps> = (props) => {
  return (
    <>
      <Header>
        <Nav>
          <Link to='/game'>play</Link>
          <Link to='/statics'>Statics</Link>
          <Link to='/settings'>Settings</Link>
        </Nav>
      </Header>
      <Route {...props} />
    </>
  )
}

export default LayoutRoute
