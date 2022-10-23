import { Box, Divider, List, ListItem, ListItemText } from "@mui/material"
import { useState } from "react";
import { useEffect } from "react";
import { getBusByBusStop } from "../../api/api";
import sd from '../../assets/sd.png';
import dd from '../../assets/dd.png';

export const BusStopsDetails = ({ busStopCode, index, expanded }) => {
    const [buses, setBuses] = useState([]);

    useEffect(() => {
        if (expanded === index) {
            getBusByBusStop(busStopCode)
                .then(res => setBuses(res.data.Services))
        }
    }, [busStopCode, expanded, index]);

    const getMinutes = (expected) => {
        const time = new Date(expected).getTime();
        const diff = time - Date.now();
        return Math.round(diff / 1000 / 60);
    }

    const checkLoad = (load) => {
        switch (load) {
            case 'SEA':
                return 'green';
            case 'SDA':
                return 'orange';
            case 'LSD':
                return 'red';
            default:
                return 'white';
        }
    }

    return (
        <List>
            {buses.map((value, index) => (
                <Box key={index}>
                    <ListItem button color="primary" disableGutters={true}>
                        <ListItemText primary={`Bus: ${value.ServiceNo}`} sx={{ color: 'black' }} />
                        {isNaN(getMinutes(value.NextBus.EstimatedArrival)) ? <ListItemText /> : <>
                            <span style={{ height: '1.5rem', width: '.3rem', backgroundColor: checkLoad(value.NextBus.Load), marginRight: '.3rem' }}></span>
                            <img src={value.NextBus.Type === 'SD' ? sd : dd} style={{ height: '1.5rem' }} alt='bus' />
                            <ListItemText secondary={`${getMinutes(value.NextBus.EstimatedArrival)} mins`} />
                        </>}
                        {isNaN(getMinutes(value.NextBus2.EstimatedArrival)) ? <ListItemText /> : <>
                            <span style={{ height: '1.5rem', width: '.3rem', backgroundColor: checkLoad(value.NextBus2.Load), marginRight: '.3rem' }}></span>
                            <img src={value.NextBus2.Type === 'SD' ? sd : dd} style={{ height: '1.5rem' }} alt='bus' />
                            <ListItemText secondary={`${getMinutes(value.NextBus2.EstimatedArrival)} mins`} />
                        </>}
                        {isNaN(getMinutes(value.NextBus3.EstimatedArrival)) ? <ListItemText /> : <>
                            <span style={{ height: '1.5rem', width: '.3rem', backgroundColor: checkLoad(value.NextBus3.Load), marginRight: '.3rem' }}></span>
                            <img src={value.NextBus3.Type === 'SD' ? sd : dd} style={{ height: '1.5rem' }} alt='bus' />
                            <ListItemText secondary={`${getMinutes(value.NextBus3.EstimatedArrival)} mins`} />
                        </>}
                    </ListItem>
                    <Divider />
                </Box>
            ))}
        </List>
    )
}