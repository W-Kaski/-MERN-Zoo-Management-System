import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    noticeList: [
        // {
        //     id: 2,
        //     title: "notice trial",
        //     details: "this is the content of the notice",
        //     date: Date()
        // },
        // {
        //     id: 3,
        //     title: "another trial with a very very long title",
        //     details: "something is here",
        //     date: Date()
        // }
    ],
    loading: false,
    error: null,
    response: null,
};

const noticeSlice = createSlice({
    name: 'notice',
    initialState,
    reducers: {
        getRequest: (state) => {
            state.loading = true;
        },
        getSuccess: (state, action) => {
            state.noticesList = action.payload;
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
        }
    },
});

export const {
    getRequest,
    getSuccess,
    getFailed,
    getError
} = noticeSlice.actions;

export const noticeReducer = noticeSlice.reducer;