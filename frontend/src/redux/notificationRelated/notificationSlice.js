import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notificationList: [],
  loading: false,
  error: null,
  response: null,
};

const notificationSlice = createSlice({
  name: "notification",
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
    },
  },
});

export const {
    getRequest,
    getSuccess,
    getFailed,
    getError,
} = notificationSlice.actions;

export default notificationSlice.reducer;

