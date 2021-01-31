import React, { createContext, useReducer, useContext } from "react";
import { SET_USER_LOGIN, SET_USER_LOGOUT } from "./actions"

const UserContext = createContext();

const DEFALUT_STATE = {
    id: null,
    username: null,
    email: null,
    password: null
}

const reducer = (state, action) => {
    switch(action.type) {
        case SET_USER_LOGIN:
            return {
                id: action.payload._id,
                username: action.payload.username,
                email: action.payload.email,
                password: action.payload.password
            };
        case SET_USER_LOGOUT:
            return DEFALUT_STATE;
        default:
            return state;
    }
}

const UserProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, DEFALUT_STATE);

    return <UserContext.Provider value={[state, dispatch]} {...props}/>
}

const useUserContext = () => {
    return useContext(UserContext)
};

export {UserProvider, useUserContext}