import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  financeList: [],
  loading: false,
  error: null,
  response: null,
};

const financeSlice = createSlice({
  name: "finance",
  initialState,
  reducers: {
    getRequest: (state) => {
      state.loading = true;
    },
    getSuccess: (state, action) => {
      state.financeList = action.payload;
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
  financeSlice.actions;

export default financeSlice.reducer;
