import React from 'react';
import { Route, Switch } from 'react-router';
import App  from './App/App'
const Routes = (props) => {
  return (
    <div>
      <Switch>
        <Route path={'/'} component={App} />
      </Switch>
    </div>
  )
}

export default Routes