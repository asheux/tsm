import React from "react";
import { Redirect } from "react-router-dom";
import jwtDecode from "jwt-decode";

export const setToken = token => {
    const authToken = localStorage.setItem("accessToken", token);
    return authToken;
};

export const getToken = () => {
    const token = localStorage.getItem("accessToken");
    return token;
};

export const userDetailsFromToken = token => {
    const info = jwtDecode(token);
    return info;
};

export const setUsername = name => {
    const username = localStorage.setItem("user_name", name);
    return username;
};

export const getUsername = () => {
    const username = localStorage.getItem("user_name");
    return username;
};

export const isAuthenticated = () => !!getToken();

export const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user_name");
};

