import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Products from '../containers/Products';
import SingleItem from '../containers/SingleItem';
import Login from '../containers/Login';
import SignUp from '../containers/SignUp';
import ShoppingCart from '../containers/ShoppingCart';
import Customer from '../containers/Customer';
import Stripe from '../containers/Stripe';
import Authorization from '../utils';

/**
 * Implements routing in the application
 */
export const AppRoutes = () => (
  <Router>
    <React.Fragment>
      <Switch>
        <Route path={[
          "/",
          "/products",
          "/products/inCategory/:id",
          "/products/inDepartment/:id"
        ]} component={Products} exact/>
        <Route path="/products/:id" component={SingleItem} exact/>
        <Route path="/auth/login" component={Login} exact/>
        <Route path="/auth/register" component={SignUp} exact />
        <Route path="/shoppingcart/:cartId" component={ShoppingCart} exact />
        <Route path="/customer" component={Authorization(Customer)} exact />
        <Route path="/stripe/:cartId/charge" component={Authorization(Stripe)} exact />
      </Switch>
    </React.Fragment>
  </Router>
);

export default AppRoutes;
