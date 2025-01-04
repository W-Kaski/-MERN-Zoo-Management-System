import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  complaintList: [],
  loading: false,
  error: null,
  response: null,
};

const complaintSlice = createSlice({
  name: "complaint",
  initialState,
  reducers: {
    getRequest: (state) => {
      state.loading = true;
    },
    getSuccess: (state, action) => {
      state.complaintList = action.payload;
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

export const { getRequest, getSuccess, getFailed, getError } =
  complaintSlice.actions;

export default complaintSlice.reducer;
