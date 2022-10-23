import { Accordion, AccordionDetails, AccordionSummary, colors, Grid, Typography, useTheme } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState, useMemo } from "react"
import { useSelector } from "react-redux";
import { getNearestBusStop } from "../../utils";
import { NearbyBusStopsDetails } from "./NearbyBusStopsDetails";

export const NearbyBusStopsLists = () => {
    const busStop = useSelector(state => state.busStop.value)
    const [geo, setGeo] = useState({
        latitude: "",
        longitude: ""
    })
    const [expanded, setExpanded] = useState(false)

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(pos => {
                setGeo({ latitude: pos.coords.latitude, longitude: pos.coords.longitude })
            })
        }
    }, [])

    const memoizedNearestBustop = useMemo(() => getNearestBusStop(geo.latitude, geo.longitude, busStop, 'K'), [geo.latitude, geo.longitude, busStop]);

    const handleChange = (index) => (_event, newExpanded) => setExpanded(newExpanded ? index : false);

    return (
        <Container disableGutters sx={{ bgcolor: 'secondary.main' }}>
            {
                memoizedNearestBustop.map((value, index) =>
                    <Accordion expanded={expanded === index} onChange={handleChange(index)} key={index} sx={{ bgcolor: 'primary.main', color: '#fff' }}>
                        <AccordionSummary>
                            <Grid container spacing={2} paddingX={3}>
                                <Grid item xs={4}>
                                    <Typography>{value.RoadName}</Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography>{value.Description}</Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography>Code: ({value.BusStopCode})</Typography>
                                </Grid>
                            </Grid>
                        </AccordionSummary>
                        <AccordionDetails sx={{ bgcolor: 'primary.light' }}>
                            <NearbyBusStopsDetails busStopCode={value.BusStopCode} index={index} expanded={expanded} />
                        </AccordionDetails>
                    </Accordion>
                )
            }
        </Container >
    )
}