import React from 'react'
import { Route, RouteProps } from 'react-router-dom'

const LayoutRoute: React.FC<RouteProps> = (props) => {
  return (
    <Route {...props} />
  )
}

export default LayoutRoute
