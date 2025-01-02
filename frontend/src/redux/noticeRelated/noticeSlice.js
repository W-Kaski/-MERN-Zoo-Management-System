import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    noticeList: [
        {
            id: 1,
            title: "notice trial",
            detail: "this is the content of the notice",
            date: Date("2025-01-01")
        }
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