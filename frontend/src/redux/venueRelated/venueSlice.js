import { createSlice } from "@reduxjs/toolkit";

// venues contain species contain animals

const initialState = {
    venuesList: [],
    venueDetails: [],
    loading: false,
    subloading: false,
    error: null,
    response: null,
    getresponse: null,
};

const venueSlice = createSlice({
    name: 'venue',  // 修改为 venue
    initialState,
    reducers: {
        getRequest: (state) => {
            state.loading = true;
        },

    },
});

export const {

} = venueSlice.actions;

export const venueReducer = venueSlice.reducer;
