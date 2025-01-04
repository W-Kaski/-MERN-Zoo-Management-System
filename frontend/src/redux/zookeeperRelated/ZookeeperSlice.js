import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  zookeeperList: [],
  loading: false,
  error: null,
  response: null,
  status: "idle",
};

const zookeeperSlice = createSlice({
  name: "zookeeper",
  initialState,
  reducers: {
    getRequest: (state) => {
      state.loading = true;
    },
    stuffDone: (state) => {
      state.loading = false;
      state.error = null;
      state.response = null;
      state.status = "added";
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
    underStudentControl: (state) => {
      state.loading = false;
      state.response = null;
      state.error = null;
      state.status = "idle";
    },
  },
});

export const {
  getRequest,
  getSuccess,
  getFailed,
  getError,
  underStudentControl,
  stuffDone,
} = zookeeperSlice.actions;

export const zookeeperReducer = zookeeperSlice.reducer;
