import { Box, Divider, List, ListItem, ListItemText } from "@mui/material"
import { useState } from "react"
import { useEffect } from "react"
import { getBusByBusStop } from "../../api/api"

export const NearbyBusStopsDetails = ({ busStopCode }) => {
    const [buses, setBuses] = useState([]);

    useEffect(() => {
        getBusByBusStop(busStopCode)
            .then(res => setBuses(res.data.Services))
    }, []);

    const getMinutes = (expected) => {
        const time = new Date(expected).getTime();
        const diff = time - Date.now();
        return Math.round(diff / 1000 / 60);
    }

    return (
        <List>
            {buses.map((value, index) => (
                <Box key={index}>
                    <ListItem button>
                        <ListItemText primary={`Bus: ${value.ServiceNo}`} />
                        <ListItemText secondary={`${getMinutes(value.NextBus.EstimatedArrival)} mins ${value.NextBus.Type}`} />
                        <ListItemText secondary={`${getMinutes(value.NextBus2.EstimatedArrival)} mins ${value.NextBus2.Type}`} />
                        <ListItemText secondary={`${getMinutes(value.NextBus3.EstimatedArrival)} mins ${value.NextBus3.Type}`} />
                    </ListItem>
                    <Divider />
                </Box>
            ))}
        </List>
    )
}