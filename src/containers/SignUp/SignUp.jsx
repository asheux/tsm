import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import SignUpForm from "../../components/SignUpForm";
import Navbar from "../../components/Navbar";
import * as auth from "../../utils";

function SignUp(props) {
    const [payload, setPayload] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({
        nameError: "",
        emailError: "",
        passwordError: ""
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setPayload({ ...payload, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const { signupActions, history } = props;

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
                setErrors({
                    nameError: nameErr,
                    emailError: emailErr,
                    passwordError: passwordErr
                });
            }
        });
    }

    if (auth.isAuthenticated()) {
        return <Redirect to="/" /> 
    }

    return (
        <React.Fragment>
            <Navbar menuItems={[]} />
            <SignUpForm
                attributes={payload}
                errorMessages={errors}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </React.Fragment>
    );
}

export default SignUp;
