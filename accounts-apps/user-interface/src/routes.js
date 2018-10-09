import React from 'react';
import {
  Route, Switch, Redirect, withRouter,
} from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Error from './Layout/Error';
import College from './Pages/College';

const Routes = () => (
  <Error>
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/college" component={College} />
      <Route render={() => <Redirect to="/notFound" />} />
    </Switch>
  </Error>
);

export default withRouter(Routes);
