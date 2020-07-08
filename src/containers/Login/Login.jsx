import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import LoginForm from "../../components/LoginForm";
import Navbar from "../../components/Navbar";
import * as auth from "../../utils";

function Login(props) {
    const [payload, setPayload] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({ emailError: "", passwordError: "" });

    function handleChange(e) {
        const { value, name } = e.target;
        setPayload({ ...payload, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const { loginActions, history } = props;

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
                setErrors({
                    ...errors,
                    emailError: emailErr,
                    passwordError: passwordErr
                });
            }
        });
    }

    if (auth.isAuthenticated()) {
        return <Redirect to="/" />;
    }

    return (
        <React.Fragment>
            <Navbar menuItems={[]} />
            <LoginForm
                errorMessages={errors}
                attributes={payload}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </React.Fragment>
    );
}

export default Login;
