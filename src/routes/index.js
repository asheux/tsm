import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from '../containers/Dashboard';
import SingleItem from '../containers/SingleItem';
import Login from '../containers/Login';
import SignUp from '../containers/SignUp';
import ShoppingCart from '../containers/ShoppingCart';
import Customer from '../containers/Customer';
import CustomerAddress from '../containers/CustomerAddress';
import Authorization from '../utils';

export const AppRoutes = () => (
  <Router>
    <React.Fragment>
      <Switch>
        <Route path={[
          "/",
          "/products/inCategory/:id",
          "/products/inDepartment/:id"
        ]} component={Dashboard} exact/>
        <Route path="/products/:id" component={SingleItem} exact/>
        <Route path="/auth/login" component={Login} exact/>
        <Route path="/auth/register" component={SignUp} exact />
        <Route path="/shoppingcart/:cartId" component={ShoppingCart} exact />
        <Route path="/customer" component={Authorization(Customer)} exact />
        <Route path="/customers/address" component={Authorization(CustomerAddress)} exact />
      </Switch>
    </React.Fragment>
  </Router>
);

export default AppRoutes;
