import { createSlice } from "@reduxjs/toolkit";

// venues contain species contain animals

const initialState = {
    spiecesList: [],
    spieceDetails: [],
    loading: false,
    subloading: false,
    error: null,
    response: null,
    getresponse: null,
};

const spieceSlice = createSlice({
    name: 'spiece',  // 修改为 spiece
    initialState,
    reducers: {
        getRequest: (state) => {
            state.loading = true;
        },

    },
});

export const {

} = spieceSlice.actions;

export const spieceReducer = spieceSlice.reducer;
