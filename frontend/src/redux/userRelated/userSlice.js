import {createSlice} from '@reduxjs/toolkit';
import {useSelector} from "react-redux";

// localStorage.clear();  // temp

const initialState = {
    status: 'idle',  // idle, loading, success, added, failed, error
    userDetails: [],
    tempDetails: [],
    loading: false,
    currentUser: JSON.parse(localStorage.getItem('user')) || null,
    currentRole: (JSON.parse(localStorage.getItem('user')) || {}).role || null,
    error: null,
    response: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        tempSetUser: (state, action) => {
            state.status = 'success';
            state.currentRole = action.payload.role;
            state.currentUser = action.payload.fields;

            console.log(action[1])
            console.log(state.currentRole)
            console.log(action[0])
            console.log(state.currentUser)

            localStorage.setItem('user', JSON.stringify(action.payload));
            state.response = null;
            state.error = null;
        },
        authRequest: (state) => {
            state.status = 'loading';
        },
        authSuccess: (state, action) => {
            state.status = 'success';
            state.currentUser = action.payload;
            state.currentRole = action.payload.role;
            localStorage.setItem('user', JSON.stringify(action.payload));
            state.response = null;
            state.error = null;
        },
        authFailed: (state, action) => {
            state.status = 'failed';
            state.response = action.payload;
        },
        authError: (state, action) => {
            state.status = 'error';
            state.error = action.payload;
        },
        addStuff: (state, action) => {
            state.status = 'added';
            state.response = null;
            state.error = null;
            state.tempDetails = action.payload;
        },
        stuffAdded: (state, action) => {
            state.status = 'added';
            state.response = null;
            state.error = null;
            state.tempDetails = action.payload;
        },
        underControl: (state) => {
            state.status = 'idle';
            state.response = null;
        },
    },
});

export const {
    tempSetUser,
    authRequest,
    authSuccess,
    authFailed,
    authError,
    addStuff,
    stuffAdded,
    underControl
} = userSlice.actions;

export const userReducer = userSlice.reducer;
