import { createSlice } from "@reduxjs/toolkit";
import { getBusStops } from "../api/api";

export const busStopSlice = createSlice({
    name: 'busStop',
    initialState: {
        value: []
    },
    reducers: {
        initStateAsync: state => {
            if (localStorage.getItem('busStop') == null) {
                getBusStops().then(res => {
                    localStorage.setItem('busStop', JSON.stringify(res.data));
                });
            }
            state.value = JSON.parse(localStorage.getItem('busStop'));
        }
    }
});

export const { initStateAsync } = busStopSlice.actions;
export default busStopSlice.reducer;