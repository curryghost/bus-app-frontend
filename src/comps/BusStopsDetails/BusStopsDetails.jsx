import { List } from "@mui/material"
import { useState } from "react";
import { useEffect } from "react";
import { getBusByBusStop } from "../../api/api";

import { RowDetails } from "./RowDetails";

export const BusStopsDetails = ({ busStopCode, index, expanded }) => {
    const [buses, setBuses] = useState([]);

    useEffect(() => {
        if (expanded === index) {
            getBusByBusStop(busStopCode)
                .then(res => setBuses(res.data.Services))
        }
    }, [busStopCode, expanded, index]);

    return (
        <List>
            {buses.length > 0 && buses.map((value, index) => (
                <RowDetails value={value} index={index} key={index} />
            ))}
        </List>
    )
}