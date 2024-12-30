import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const complaintSlice = createSlice({
  name: "complaint",
  initialState,
    reducers: {
      createComplaint: (state, action) => {
        state[action.payload.id] = action.payload;
      },
      updateComplaint: (state, action) => {
        state[action.payload.id] = action.payload;
      },
      deleteComplaint: (state, action) => {
        delete state[action.payload];
      },
  },
});

export const {
    createComplaint,
    updateComplaint,
    deleteComplaint,
  } = complaintSlice.actions;

export default complaintSlice.reducer;
