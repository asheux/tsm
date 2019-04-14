import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from '../containers/Dashboard';
import SingleItem from '../containers/SingleItem';
import Login from '../containers/Login';
import SignUp from '../containers/SignUp';

export const AppRoutes = () => (
  <Router>
    <React.Fragment>
      <Switch>
        <Route path={[
          "/",
          "/products/inCategory/:id",
          "/products/inDepartment/:id"
        ]} component={Dashboard} exact/>
        <Route path="/products/details" component={SingleItem} exact/>
        <Route path="/auth/login" component={Login} exact/>
        <Route path="/auth/register" component={SignUp} exact />
      </Switch>
    </React.Fragment>
  </Router>
);

export default AppRoutes;
