import { configureStore } from "@reduxjs/toolkit";


import zookeeperReducer from "./zookeeperRelated/ZookeeperSlice";
import complaintReducer from "./complaintRelated/ComplaintSlice";



const store = configureStore({
  reducer: {
    zookeeper: zookeeperReducer,
    complaint: complaintReducer,
  },
});

export default store;
