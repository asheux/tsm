import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import SignUpForm from "../../components/SignUpForm";
import Navbar from "../../components/Navbar";
import * as auth from "../../utils";

class SignUp extends Component {
    /**
     * Creates the ShoppingCart Component and initializes state
     * @constructor
     * @param {*} props - Super props inherited by Component
     */
    constructor(props) {
        super(props);
        this.state = {
            payload: {
                name: "",
                email: "",
                password: ""
            },
            errors: {
                nameError: "",
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
        const { payload } = this.state;
        const { signupActions, history } = this.props;
        signupActions(payload).then(data => {
            if (!data.errors && data.data) {
                const token = data.data.accessToken;
                const username = data.data.customer.name;
                auth.setUsername(username);
                auth.setToken(token);
                history.push("/");
            } else {
                let nameErr = "";
                let emailErr = "";
                let passwordErr = "";
                const { error } = data.errors.response.data;
                const fields = error.field.split(",");
                fields.map(field => {
                    if (field === "name") {
                        nameErr = error.message;
                    }
                    if (field === "email") {
                        emailErr = error.message;
                    }
                    if (field === "password") {
                        passwordErr = error.message;
                    }
                    return "";
                });
                this.setState({
                    errors: {
                        nameError: nameErr,
                        emailError: emailErr,
                        passwordError: passwordErr
                    }
                });
            }
        });
    };

    render() {
        const { payload, errors } = this.state;
        if (auth.isAuthenticated()) {
            return <Redirect to="/" />;
        }
        return (
            <React.Fragment>
                <Navbar menuItems={[]} />
                <SignUpForm
                    attributes={payload}
                    errorMessages={errors}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
            </React.Fragment>
        );
    }
}

export default SignUp;
