import React, { Suspense, lazy }from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Authentication, { Authorization } from "../components/Authentication/Authentication";

// introduction of route-based code-splitting with React.lazy (improves performance)
const Products = lazy(() => import("../containers/Products"));
const SingleItem = lazy(() => import("../containers/SingleItem"));
const Login = lazy(() => import("../containers/Login"));
const SignUp = lazy(() => import("../containers/SignUp"))
const ShoppingCart = lazy(() => import("../containers/ShoppingCart"));
const Customer = lazy(() => import("../containers/Customer"));
const Stripe = lazy(() => import("../containers/Stripe"));
const MyOrders = lazy(() => import("../containers/MyOrders"));
const SingleOrder = lazy(() => import("../containers/SingleOrder"));
const Testing = lazy(() => import("../components/Testing"));

/**
 * Implements routing in the application
 */
export const AppRoutes = () => (
    <Router>
        <React.Fragment>
            <Suspense fallback={<div/>}>
                <Switch>
                    <Route
                        path={[
                            "/",
                            "/products",
                            "/products/inCategory/:id",
                            "/products/inDepartment/:id"
                        ]}
                        component={Products}
                        exact
                    />
                    <Route path="/products/:id" component={SingleItem} exact />
                    <Route path="/auth/login" component={Login} exact />
                    <Route path="/auth/register" component={SignUp} exact />
                    <Route
                        path="/shoppingcart/:cartId"
                        component={ShoppingCart}
                        exact
                    />
                    <Route
                        path="/customer"
                        component={Authentication(Authorization(Customer))}
                        exact
                    />
                    <Route
                        path="/stripe/charge"
                        component={Authentication(Authorization(Stripe))}
                        exact
                    />
                    <Route
                        path="/myorders"
                        component={Authentication(Authorization(MyOrders))}
                        exact
                    />
                    <Route path="/orders/:order_id" component={SingleOrder} exact />
                    <Route path="/testing" component={Testing} exact />
                </Switch>
            </Suspense>
        </React.Fragment>
    </Router>
);

export default AppRoutes;
