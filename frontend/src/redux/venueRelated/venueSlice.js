import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  venueList: [],
  loading: false,
  error: null,
  response: null,
};

const venueSlice = createSlice({
  name: "venue",
  initialState,
  reducers: {
    getRequest: (state) => {
      state.loading = true;
    },
    getSuccess: (state, action) => {
      state.venueList = action.payload;
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
  venueSlice.actions;

export default venueSlice.reducer;
