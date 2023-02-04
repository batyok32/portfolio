import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    SIGN_UP_FAIL,
    SIGN_UP_SUCCESS,
    USER_LOADED_SUCCESS,
    USER_LOADED_FAIL,
    AUTHENTICATED_SUCCESS,
    AUTHENTICATED_FAIL,
    LOGOUT,
    PROFILE_LOADED_SUCCESS,
    REMOVE_MESSAGES,
    ADD_MESSAGE,
    REMOVE_ERRORS,
    ADD_ERROR,
} from "../types/types";

const initialState = {
    access: localStorage.getItem("access"),
    refresh: localStorage.getItem("refresh"),
    isAuthenticated: null,
    user: null,
    profile: null,
    error: null,
    success_message: null,
};

export default function auth(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        // Check Authenticated when access token is expired
        case AUTHENTICATED_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
            };
        case AUTHENTICATED_FAIL:
            return {
                ...state,
                isAuthenticated: false,
            };

        // Login
        case LOGIN_SUCCESS:
            localStorage.setItem("access", payload.access);
            localStorage.setItem("refresh", payload.refresh);
            return {
                ...state,
                isAuthenticated: true,
                access: payload.access,
                refresh: payload.refresh,
            };
        case LOGIN_FAIL:
            localStorage.removeItem("access");
            localStorage.removeItem("refresh");
            return {
                ...state,
                access: null,
                refresh: null,
                isAuthenticated: false,
                user: null,
            };

        // Load User Data
        case USER_LOADED_SUCCESS:
            return {
                ...state,
                user: payload,
            };
        case USER_LOADED_FAIL:
            return {
                ...state,
                user: null,
            };

        case PROFILE_LOADED_SUCCESS:
            return {
                ...state,
                profile: payload,
            };

        // Loging out
        case LOGOUT:
            localStorage.removeItem("access");
            localStorage.removeItem("refresh");
            // console.log("Removed");
            return {
                ...state,
                access: null,
                refresh: null,
                isAuthenticated: null,
                user: null,
                profile: null,
            };

        case SIGN_UP_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
            };
        case SIGN_UP_FAIL:
            localStorage.removeItem("access");
            localStorage.removeItem("refresh");
            return {
                ...state,
                access: null,
                refresh: null,
                isAuthenticated: false,
                user: null,
            };
        case ADD_ERROR:
            return {
                ...state,
                error: payload,
            };
        case REMOVE_ERRORS:
            return {
                ...state,
                error: null,
            };
        case ADD_MESSAGE:
            return {
                ...state,
                success_message: payload,
            };
        case REMOVE_MESSAGES:
            return {
                ...state,
                success_message: null,
            };

        default:
            return state;
    }
}

// case PASSWORD_RESET_SUCCESS:
// case PASSWORD_RESET_CONFIRM_SUCCESS:
//     case ACTIVATION_SUCCESS:
//         return {
//             ...state,
//             success_message: payload,
//             error: null,
//         };

//     case REMOVE_ERRORS:
//         return {
//             ...state,
//             error: null,
//         };
//     case ADD_ERROR:
//         return {
//             ...state,
//             error: payload,
//         };

//     case ADD_MESSAGE:
//         return {
//             ...state,
//             success_message: payload,
//         };
//     case REMOVE_MESSAGES:
//         return {
//             ...state,
//             success_message: null,
//         };

//     case PASSWORD_RESET_FAIL:
//     case PASSWORD_RESET_CONFIRM_FAIL:
//     case ACTIVATION_FAIL:
//         return {
//             ...state,
//             error: payload,
//         };
//     case LOAD_ACCOUNT_DATA:
//         return {
//             ...state,
//             account_data: payload,
//         };
//     case LOAD_PERMISSIONS:
//         return {
//             ...state,
//             permissions: payload,
//         };
