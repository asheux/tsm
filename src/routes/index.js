import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from '../containers/Dashboard';
import SingleItem from '../containers/SingleItem';
import Login from '../containers/Login';
import SignUp from '../containers/SignUp';
import ShoppingCart from '../containers/ShoppingCart';

export const AppRoutes = (props) => (
  <Router>
    <React.Fragment>
      <Switch>
        <Route path={[
          "/",
          "/products/inCategory/:id",
          "/products/inDepartment/:id"
        ]} {...props} component={Dashboard} exact/>
        <Route path="/products/:id" {...props} component={SingleItem} exact/>
        <Route path="/auth/login" {...props} component={Login} exact/>
        <Route path="/auth/register" component={SignUp} exact />
        <Route path="/shoppingcart/:cartId" component={ShoppingCart} exact />
      </Switch>
    </React.Fragment>
  </Router>
);

export default AppRoutes;
