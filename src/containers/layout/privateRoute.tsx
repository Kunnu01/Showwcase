import React, { Fragment } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import storage from '../../storage'

const PrivateRoute: React.FC<RouteProps> = ({ component: Component, ...rest }) => {
  if (!Component) {
    return <Fragment />
  }
  
  return (
    <Route
      {...rest}
      render={matchProps => (
        storage.get('session')
          ? <Component { ...matchProps } />
          : <Redirect to="/" />
      )}
    />
  )
}

export { PrivateRoute }
