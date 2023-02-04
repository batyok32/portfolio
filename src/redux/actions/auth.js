import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED_SUCCESS,
    AUTHENTICATED_SUCCESS,
    LOGOUT,
    PROFILE_LOADED_SUCCESS,
    AUTHENTICATED_FAIL,
    ADD_ERROR,
    ADD_MESSAGE,
} from "../types/types";

import errors from "./../messages/errors.json";
import success from "./../messages/success.json";
import axios from "axios";
import { authConfig, config, multipartConfig } from "../utils/config";

//======================= LOAD USERS ===============================
export const load_company = () => async (dispatch) => {
    if (localStorage.getItem("access")) {
        const authConfig = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `JWT ${localStorage.getItem("access")}`,
                Accept: "application/json",
            },
        };
        try {
            const res = await axios.get(
                `${process.env.REACT_APP_API_URL}/credentials/company/me/`,
                authConfig
            );
            dispatch({
                type: PROFILE_LOADED_SUCCESS,
                payload: res.data,
            });
        } catch (error) {
            return errors.error3;
        }
    } else {
        return "Not authenticated!";
    }
};

export const load_stranger_company = (pk) => async (dispatch) => {
    try {
        const res = await axios.get(
            `${process.env.REACT_APP_API_URL}/credentials/company/${pk}/`,
            config
        );
        return res.data;
    } catch (error) {
        return error;
    }
};

export const load_freelancer = () => async (dispatch) => {
    if (localStorage.getItem("access")) {
        try {
            const authConfig = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `JWT ${localStorage.getItem("access")}`,
                    Accept: "application/json",
                },
            };
            const res = await axios.get(
                `${process.env.REACT_APP_API_URL}/credentials/freelancer/me/`,
                authConfig
            );
            dispatch({
                type: PROFILE_LOADED_SUCCESS,
                payload: res.data,
            });
        } catch (error) {
            return errors.error3;
        }
    } else {
        console.log("Not Authenticated");
    }
};

export const load_user = () => async (dispatch) => {
    if (localStorage.getItem("access")) {
        try {
            const authConfig = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `JWT ${localStorage.getItem("access")}`,
                    Accept: "application/json",
                },
            };
            const res = await axios.get(
                `${process.env.REACT_APP_API_URL}/auth/users/me/`,
                authConfig
            );
            dispatch({
                type: USER_LOADED_SUCCESS,
                payload: res.data,
            });

            if (res.data.type === "COMPANY") {
                dispatch(load_company());
            } else if (res.data.type === "FREELANCER") {
                dispatch(load_freelancer());
            }
        } catch (error) {
            return errors.error3;
        }
    } else {
        return "Not authenticated!";
    }
};

// ===============Login====================================
export const login = (username, password) => async (dispatch) => {
    const body = JSON.stringify({ username: username, password: password });
    try {
        const res = await axios.post(
            `${process.env.REACT_APP_API_URL}/auth/jwt/create/`,
            body,
            config
        );
        await dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
        });

        dispatch({
            type: ADD_MESSAGE,
            payload: success.success3,
        });
        await dispatch(load_user());
        return res;
    } catch (error) {
        return errors.error4;
    }
};

//======================= AUTH UTILS ===============================
export const get_access_token = () => async (dispatch) => {
    const body = JSON.stringify({ refresh: localStorage.getItem("refresh") });
    try {
        const res = await axios.post(
            `${process.env.REACT_APP_API_URL}/auth/jwt/refresh/`,
            body,
            config
        );
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: errors.error4,
        });
    }
};

export const checkAuthenticated = () => async (dispatch) => {
    if (localStorage.getItem("access")) {
        const body = JSON.stringify({ token: localStorage.getItem("access") });

        try {
            const res = await axios.post(
                `${process.env.REACT_APP_API_URL}/auth/jwt/verify/`,
                body,
                authConfig
            );

            if (res.data.code !== "token_not_valid") {
                dispatch({
                    type: AUTHENTICATED_SUCCESS,
                });
                return 200;
            } else {
                dispatch(get_access_token());
            }
        } catch (error) {
            dispatch(get_access_token());
        }
    } else {
        dispatch({
            type: AUTHENTICATED_FAIL,
        });
    }
};

export const check_user = (username) => async (dispatch) => {
    const body = JSON.stringify({ username });
    try {
        const res = await axios.post(
            `${process.env.REACT_APP_API_URL}/credentials/user/exist/`,
            body,
            config
        );
        return res.data;
    } catch (error) {
        return errors.error4;
    }
};
export const check_company = (full_name, me) => async (dispatch) => {
    const body = JSON.stringify({ full_name });
    let editedConfig = config;
    if (me) {
        editedConfig = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `JWT ${localStorage.getItem("access")}`,
                Accept: "application/json",
            },
        };
    }
    // console.log("CONFIG CHECK COMPANY", editedConfig);
    try {
        const res = await axios.post(
            `${process.env.REACT_APP_API_URL}/credentials/company/exist/`,
            body,
            editedConfig
        );
        return res.data;
    } catch (error) {
        return errors.error4;
    }
};

export const logout = () => async (dispatch) => {
    dispatch({
        type: LOGOUT,
    });
    dispatch({
        type: ADD_MESSAGE,
        payload: success.success4,
    });
};

//======================= REGISTER ===============================
export const signUpCompany = (userData, profileData) => async (dispatch) => {
    let form_data = new FormData();
    if (profileData.image) {
        form_data.append("logo", profileData.image.raw);
    }
    form_data.append("username", userData.username);
    form_data.append("password", userData.password);
    form_data.append("full_name", profileData.fullName);
    form_data.append("description", profileData.compInfo);
    form_data.append("address", profileData.address);
    form_data.append("found_date", profileData.choosedDate);
    form_data.append("company_type", profileData.companyType);
    form_data.append("phone_number", profileData.phone_number);
    try {
        const res = await axios.post(
            `${process.env.REACT_APP_API_URL}/credentials/company/`,
            form_data,
            multipartConfig
        );
        dispatch(login(userData.username, userData.password));
        return res.data;
    } catch (error) {
        if (error.response.status === 400) {
            return error.message;
        } else {
            return errors.error5;
        }
    }
};
export const signUpFreelancer = (userData, profileData) => async (dispatch) => {
    let form_data = new FormData();
    if (profileData.image) {
        form_data.append("logo", profileData.image.raw);
    }
    form_data.append("username", userData.username);
    form_data.append("password", userData.password);
    form_data.append("full_name", profileData.fullName);
    form_data.append("profession", profileData.profesion);
    form_data.append("experience", profileData.experience);
    form_data.append("knowledge", profileData.knowledge);
    form_data.append("projects", profileData.projects);
    form_data.append("phone_number", profileData.phone_number);
    form_data.append("birth_date", profileData.birthDate);
    try {
        const res = await axios.post(
            `${process.env.REACT_APP_API_URL}/credentials/freelancer/`,
            form_data,
            multipartConfig
        );
        dispatch(login(userData.username, userData.password));
        return res.data;
    } catch (error) {
        if (error.response.status === 400) {
            return error.message;
        } else {
            return errors.error5;
        }
    }
};

export const changeCompanyProfile = (profileData) => async (dispatch) => {
    let form_data = new FormData();
    if (localStorage.getItem("access")) {
        if (profileData.image) {
            form_data.append("logo", profileData.image.raw);
        }
        form_data.append("full_name", profileData.fullName);
        form_data.append("description", profileData.compInfo);
        form_data.append("address", profileData.address);
        form_data.append("found_date", profileData.choosedDate);
        form_data.append("company_type", profileData.companyType);
        form_data.append("phone_number", profileData.phone_number);
        const authMultipartConfig = {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `JWT ${localStorage.getItem("access")}`,
                Accept: "application/json",
            },
        };
        try {
            const res = await axios.patch(
                `${process.env.REACT_APP_API_URL}/credentials/company/me/`,
                form_data,
                authMultipartConfig
            );
            dispatch(load_user());
            return res;
        } catch (error) {
            if (error.response.status === 400) {
                return error.message;
            } else {
                return errors.error5;
            }
        }
    } else {
        // Not loged
    }
};
export const changeFreelancerProfile = (profileData) => async (dispatch) => {
    if (localStorage.getItem("access")) {
        let form_data = new FormData();
        if (profileData.image) {
            form_data.append("logo", profileData.image.raw);
        }
        form_data.append("full_name", profileData.fullName);
        form_data.append("profession", profileData.profesion);
        form_data.append("experience", profileData.experience);
        form_data.append("knowledge", profileData.knowledge);
        form_data.append("projects", profileData.projects);
        form_data.append("phone_number", profileData.phone_number);
        form_data.append("birth_date", profileData.birthDate);
        const authMultipartConfig = {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `JWT ${localStorage.getItem("access")}`,
                Accept: "application/json",
            },
        };
        try {
            const res = await axios.patch(
                `${process.env.REACT_APP_API_URL}/credentials/freelancer/me/`,
                form_data,
                authMultipartConfig
            );
            dispatch(load_user());
            return res;
        } catch (error) {
            if (error.response.status === 400) {
                return error.message;
            } else {
                return errors.error5;
            }
        }
    } else {
        // Not loged
    }
};

// 👉
// 😱
