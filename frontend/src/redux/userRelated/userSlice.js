import {createSlice} from '@reduxjs/toolkit';
import {useSelector} from "react-redux";

const initialState = {
    status: 'idle',
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
            state.currentUser = {
                name: "Zookeeper1",
                zooName: "Zoo1",
                ID: 123,
                email: "zookeeper@mail.com",
                password: 123456,
                role: "Zookeeper",
                assignedVenue: "Venue1",
                assignedSpecies: "Lions",
                completedTasks: 0,
                zookeeperTasks: 10,
                monthlyWarning: 0,
                monthlySalary: 3000
            }
            state.currentRole = "Zookeeper";
            localStorage.setItem('user', JSON.stringify(action.payload));
            state.response = null;
            state.error = null;
            console.log("all set")
            console.log("user:",state.currentUser, "\nrole:",state.currentRole)
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
        stuffAdded: (state, action) => {
            state.status = 'added';
            state.response = null;
            state.error = null;
            state.tempDetails = action.payload;
        },
    },
});

export const {
    tempSetUser,
    authRequest,
    authSuccess,
    authFailed,
    authError,
    stuffAdded
} = userSlice.actions;

export const userReducer = userSlice.reducer;
