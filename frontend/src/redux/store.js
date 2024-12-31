import {configureStore} from "@reduxjs/toolkit";

import {userReducer} from "./userRelated/userSlice";
// import {zookeeperReducer} from "./zookeeperRelated/ZookeeperSlice";
// import {complaintReducer} from "./complaintRelated/ComplaintSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        // zookeeper: zookeeperReducer,
        // complaint: complaintReducer,
    },
});

export default store;
