import {configureStore} from "@reduxjs/toolkit";

import {userReducer} from "./userRelated/userSlice";
import {zookeeperReducer} from "./zookeeperRelated/ZookeeperSlice";
// import {complaintReducer} from "./complaintRelated/ComplaintSlice";
import {venueReducer} from "./venueRelated/venueSlice";
import {noticeReducer} from "./noticeRelated/noticeSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        zookeeper: zookeeperReducer,
        // complaint: complaintReducer,
        venue: venueReducer,
        notice: noticeReducer,
    },
});

export default store;
