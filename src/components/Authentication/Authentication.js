import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import * as auth from "../../utils";

export const AuthContext = React.createContext(null);

const Authentication = WrappedComponent => {
    class Authenticate extends Component {
        constructor(props) {
            super(props);
            this.handleLogout = () => {
                auth.logout();
                const user = auth.getUsername();
                this.setState(state => ({ authUser: user }));
            };
            this.state = {
                authUser: auth.getUsername(),
                unexpectedErr: "",
                handleLogout: this.handleLogout
            };
        }

        componentDidMount() {
            try {
                const user = auth.getUsername();
                if (auth.isAuthenticated() && user) {
                    this.setState({ authUser: user });
                }
            } catch (error) {
                this.setState({ unexpectedErr: error });
            }
        }

        render() {
            return (
                <AuthContext.Provider value={this.state}>
                    <WrappedComponent />
                </AuthContext.Provider>
            );
        }
    }

    return Authenticate;
};

/*
 * Authorize components that need authentication
 * Using higher order components and react context Api
*/
export const Authorization = WrappedComponent => {
    const WithAuth = props => {
        const { location } = props;
        return <AuthContext.Consumer>
            {({ authUser }) => {
                if (authUser) {
                    return <WrappedComponent {...props} />;
                }
                return (
                    <Redirect
                        to={{
                            pathname: "/auth/login",
                            state: { from: location }
                        }}
                    />
                );
            }}
        </AuthContext.Consumer>;
    };
    return WithAuth;
};

export default Authentication;
