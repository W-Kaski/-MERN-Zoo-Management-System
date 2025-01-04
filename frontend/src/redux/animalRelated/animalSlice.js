import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initialState: {
    animalList: [],
    animalDetails: [],
    loading: false,
    error: null,
    response: null,
  },
};

const animalSlice = createSlice({
  name: "animal",
  initialState,
  reducers: {
    getRequest: (state) => {
      state.loading = true;
    },
    doneSuccess: (state, action) => {
      state.teacherDetails = action.payload;
      state.loading = false;
      state.error = null;
      state.response = null;
    },
    getSuccess: (state, action) => {
      state.teachersList = action.payload;
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
    },
  },
});

export const {
  getRequest,
  doneSuccess,
  getSuccess,
  getFailed,
  getError,
  postDone,
} = animalSlice.actions;

export default animalSlice.reducer;
