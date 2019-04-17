import React from 'react';
import axios from 'axios';
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

export const isAuthorized = () => {
  const token = getToken();
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
  return Boolean(token);
};

export const logout = () => {
  localStorage.removeItem('accessToken');
};

const Authorization = Componnt => {
  const WithAuth = props => {
    const { location } = props;
    if(isAuthorized() && isAuthenticated()) {
      return <Componnt {...props} />;
    }
    return <Redirect to={{pathname: '/login', state: {from: location}}} />
  }
  return WithAuth;
}

export default Authorization;
