import React from 'react';
import { Redirect } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

export const setToken = (token) => {
  const authToken = localStorage.setItem('accessToken', token);
  return authToken;
};

export const getToken = () => {
  const token = localStorage.getItem('accessToken');
  return token;
};

export const userDetailsFromToken = (token) => {
  const info = jwtDecode(token);
  return info;
}

export const isAuthenticated = () => !!getToken();

export const logout = () => {
  localStorage.removeItem('accessToken');
};

const Authorization = WrappedComponent => {
  const WithAuth = props => {
    const { location } = props;
    if(isAuthenticated()) {
      return <WrappedComponent {...props} />;
    }
    return <Redirect to={{pathname: '/auth/login', state: {from: location}}} />
  }
  return WithAuth;
}

export default Authorization;
