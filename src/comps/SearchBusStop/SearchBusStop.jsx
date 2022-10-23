import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux"
import { BusStopLists } from "../BusStopLists/BusStopLists";

export const SearchBusStop = ({ input }) => {
    const [memoBusStop, setMemoBusStop] = useState({});
    const busStop = useSelector(state => state.busStop.value);

    const inputLow = input.toLowerCase();

    useEffect(() => {
        if (!Object.keys(memoBusStop).includes(input.toLowerCase())) {
            const filtered = busStop.filter(bus =>
                bus.Description.toLowerCase().includes(inputLow) ||
                bus.RoadName.toLowerCase().includes(inputLow) ||
                bus.BusStopCode.toLowerCase().includes(inputLow))
            setMemoBusStop({ ...memoBusStop, [input.toLowerCase()]: filtered.splice(0, 100) })
        }
    })

    return (
        memoBusStop[inputLow] && <BusStopLists busStop={memoBusStop[inputLow]} />
    )
}