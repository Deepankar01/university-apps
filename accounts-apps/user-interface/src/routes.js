import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import Dashboard from './Pages/Dashboard';
import Error from './Layout/Error';

const Routes = () => (
  <Error>
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route render={() => <Redirect to="/notFound" />} />
    </Switch>
  </Error>
);

export default Routes;
