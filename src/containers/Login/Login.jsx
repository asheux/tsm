import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import LoginForm from "../../components/LoginForm";
import Navbar from "../../components/Navbar";
import * as auth from "../../utils";

class Login extends Component {
    /**
     * Creates the ShoppingCart Component and initializes state
     * @constructor
     * @param {*} props - Super props inherited by Component
     */
    constructor(props) {
        super(props);
        this.state = {
            payload: {
                email: "",
                password: ""
            },
            errors: {
                emailError: "",
                passwordError: ""
            }
        };
    }

    /**
     * Listens to events and changes in form inputs
     *  @param {*} event
     */
    handleChange = e => {
        const { value, name } = e.target;
        const { payload } = this.state;
        payload[name] = value;
        this.setState({ payload });
    };

    /**
     * Listens to an onClick event on a button in a form
     * if event the the server is queried which then updates the database
     *  @param {*} event
     */
    handleSubmit = e => {
        e.preventDefault();
        const { loginActions, history } = this.props;
        const { payload } = this.state;

        loginActions(payload).then(data => {
            if (!data.errors && data.data) {
                const token = data.data.accessToken;
                const username = data.data.customer.name;
                auth.setUsername(username);
                auth.setToken(token);
                history.push("/");
            } else {
                let emailErr = "";
                let passwordErr = "";
                const { error } = data.errors.response.data;
                if (error.field === "email") {
                    emailErr = error.message;
                }
                if (error.field === "password") {
                    passwordErr = error.message;
                }
                this.setState({
                    errors: {
                        emailError: emailErr,
                        passwordError: passwordErr
                    }
                });
            }
        });
    };

    render() {
        const { errors, payload } = this.state;

        if (auth.isAuthenticated()) {
            return <Redirect to="/" />;
        }
        return (
            <React.Fragment>
                <Navbar menuItems={[]} />
                <LoginForm
                    errorMessages={errors}
                    attributes={payload}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
            </React.Fragment>
        );
    }
}

export default Login;
