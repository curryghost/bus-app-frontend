import { useEffect, useState, useMemo } from "react"
import { useSelector } from "react-redux";
import { getNearestBusStop } from "../../utils";
import { BusStopLists } from "../BusStopLists/BusStopLists";

export const NearbyBusStopsLists = () => {
    const busStop = useSelector(state => state.busStop.value)
    const [geo, setGeo] = useState({
        latitude: "",
        longitude: ""
    })

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(pos => {
                setGeo({ latitude: pos.coords.latitude, longitude: pos.coords.longitude })
            })
        }
    }, [])

    const memoizedNearestBustop = useMemo(() => getNearestBusStop(geo.latitude, geo.longitude, busStop, 'K'), [geo.latitude, geo.longitude, busStop]);


    return (
        <BusStopLists busStop={memoizedNearestBustop} />
    )
}