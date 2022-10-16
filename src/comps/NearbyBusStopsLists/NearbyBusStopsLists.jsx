import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from "@mui/material";
import { Container, padding } from "@mui/system";
import { useEffect, useState, useMemo } from "react"
import { useSelector } from "react-redux";
import { NearbyBusStopsDetails } from "./NearbyBusStopsDetails";

export const NearbyBusStopsLists = () => {
    const busStop = useSelector(state => state.busStop.value)
    const [geo, setGeo] = useState({
        latitude: "",
        longitude: ""
    })
    const [geoError, setGeoError] = useState("");

    const [expanded, setExpanded] = useState(false)

    useEffect(() => {
        let geoWatch;
        if (navigator.geolocation) {
            geoWatch = navigator.geolocation.watchPosition(
                pos => setGeo({ latitude: pos.coords.latitude, longitude: pos.coords.longitude }),
                () => setGeoError("Enable Location to see nearby bus stops"))
        }
        return () => {
            navigator.geolocation.clearWatch(geoWatch)
        };
    }, [])


    const getDistance = (lat1, lon1, lat2, lon2, unit) => {
        var radlat1 = Math.PI * lat1 / 180
        var radlat2 = Math.PI * lat2 / 180
        var theta = lon1 - lon2
        var radtheta = Math.PI * theta / 180
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
            dist = 1;
        }
        dist = Math.acos(dist)
        dist = dist * 180 / Math.PI
        dist = dist * 60 * 1.1515
        if (unit == "K") { dist = dist * 1.609344 }
        if (unit == "N") { dist = dist * 0.8684 }
        return dist
    }

    const memoizedNearestBustop = useMemo(() => {
        let nearestBusStop = [];
        busStop.forEach((value) => {
            if (nearestBusStop.length < 30) {
                nearestBusStop.push({ ...value, distance: getDistance(geo.latitude, geo.longitude, value.Latitude, value.Longitude, 'K') })
                nearestBusStop.sort((a, b) => a.distance - b.distance)
            }
            else {
                nearestBusStop.forEach((nearStop, index) => {
                    const dist = getDistance(geo.latitude, geo.longitude, value.Latitude, value.Longitude, 'K')
                    if (nearStop.distance > dist) {
                        nearestBusStop.splice(index, 1, { ...value, distance: dist })
                        nearestBusStop.pop()
                        return
                    }
                })
            }
        })
        return nearestBusStop;
    }, [geo.latitude, geo.longitude])

    const handleChange = (index) => (event, newExpanded) => {
        setExpanded(newExpanded ? index : false);
    }

    return (
        <Container disableGutters>
            {
                memoizedNearestBustop.map((value, index) =>
                    <Accordion expanded={expanded === index} onChange={handleChange(index)} key={index}>
                        <AccordionSummary>
                            <Grid container spacing={2} paddingX={3}>
                                <Grid xs={6}>
                                    <Typography>{value.RoadName}</Typography>
                                </Grid>
                                <Grid xs={6}>
                                    <Typography>{value.Description}</Typography>
                                </Grid>
                            </Grid>
                        </AccordionSummary>
                        <AccordionDetails>
                            <NearbyBusStopsDetails busStopCode={value.BusStopCode} />
                        </AccordionDetails>
                    </Accordion>
                )
            }
        </Container >
    )
}