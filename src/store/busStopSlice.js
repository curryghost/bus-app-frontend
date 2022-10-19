import { createSlice } from "@reduxjs/toolkit";
import { getBusStops } from "../api/api";

export const busStopSlice = createSlice({
    name: 'busStop',
    initialState: {
        value: []
    },
    reducers: {
        initStateAsync: (state, actions) => {
            state.value = actions.payload
        }
    }
});

export const { initStateAsync } = busStopSlice.actions;
export default busStopSlice.reducer;