import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    zookeeperList: [
        {
            name: "Zookeeper1",
            zooName: "Zoo1",
            ID: 123,
            email: "zookeeper@mail.com",
            password: 123456,
            role: "Zookeeper",
            assignedVenue: "Venue1",
            assignedSpecies: ["Lions"],
            completedTasks: 0,
            zookeeperTasks: 10,
            monthlyWarning: 0,
            monthlySalary: 3000
        }

    ],
    zookeeperDetails: [],
    loading: false,
    error: null,
    response: null,
};

const zookeeperSlice = createSlice({
    name: 'zookeeper',
    initialState,
    reducers: {
        getRequest: (state) => {
            state.loading = true;
        },
        doneSuccess: (state, action) => {
            state.zookeeperDetails = action.payload;
            state.loading = false;
            state.error = null;
            state.response = null;
        },
        getSuccess: (state, action) => {
            state.zookeeperList = action.payload;
            state.loading = false;
            state.error = null;
            state.response = null;
        },
        getFailed: (state, action) => {
            state.response = action.payload;
            state.loading = false;
            state.error = null;
        },
        getError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        postDone: (state) => {
            state.loading = false;
            state.error = null;
            state.response = null;
        }
    },
});

export const {
    getRequest,
    getSuccess,
    getFailed,
    getError,
    doneSuccess,
    postDone
} = zookeeperSlice.actions;

export const zookeeperReducer = zookeeperSlice.reducer;