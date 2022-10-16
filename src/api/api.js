import axios from "axios"

export const getBusStops = () => {
    return axios.get(`${process.env.REACT_APP_API}/busstop`)
}

export const getBusByBusStop = (busStopCode) => {
    return axios.get(`${process.env.REACT_APP_API}/busarrival/${busStopCode}`)
}