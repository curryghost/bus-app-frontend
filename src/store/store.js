import { configureStore } from '@reduxjs/toolkit'
import busStopReducer from './busStopSlice'

export default configureStore({
    reducer: {
        busStop: busStopReducer
    }
});