import React from 'react';

import { Switch, Route } from 'react-router-dom'

import Walks from './index';
import SingleWalks from './SingleWalk';

const Routes = () => {
  return <Switch>
    <Route exact path='/'>
      <Walks />
    </Route>
    <Route path='/:id'>
      <SingleWalks />
    </Route>
  </Switch>
}

export default Routes;