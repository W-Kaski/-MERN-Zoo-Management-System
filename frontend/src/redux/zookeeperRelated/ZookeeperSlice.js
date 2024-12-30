import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const zookeeperSlice = createSlice({
  name: "zookeeper",
  initialState,
    reducers: {
      addZookeeper: (state, action) => {
        state[action.payload.id] = action.payload;
      },
      updateZookeeper: (state, action) => {
        state[action.payload.id] = action.payload;
      },
      deleteZookeeper: (state, action) => {
        delete state[action.payload];
      },
      getZookeeper: (state, action) => {
        return state[action.payload];
      },
  },
});

export const {
    addZookeeper,
    updateZookeeper,
    deleteZookeeper,
    getZookeeper,
  
} = zookeeperSlice.actions;

// export const zookeeperReducer = zookeeperSlice.reducer;

export default zookeeperSlice.reducer;
