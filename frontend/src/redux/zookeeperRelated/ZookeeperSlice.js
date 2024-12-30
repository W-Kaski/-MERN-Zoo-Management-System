import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const zookeeperSlice = createSlice({
  name: "zookeeper",
  initialState,
  reducers: {},
});

export const {} = zookeeperSlice.actions;

export const zookeeperReducer = zookeeperSlice.reducer;
