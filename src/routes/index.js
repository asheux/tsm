import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from '../containers/Dashboard';

export const AppRoutes = () => (
  <Router>
    <React.Fragment>
      <Switch>
        <Route path="/" component={Dashboard} />
      </Switch>
    </React.Fragment>
  </Router>
);

export default AppRoutes;
