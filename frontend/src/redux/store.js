import { configureStore } from "@reduxjs/toolkit";
import { zookeeperReducer } from "./zookeeperRelated/ZooKeeperSlice";
import { complainReducer } from "./complaintRelated/ComplaintSlice";

const store = configureStore({
  reducer: {
    zookeeper: zookeeperReducer,
    complain: complainReducer,
  },
});

export default store;
