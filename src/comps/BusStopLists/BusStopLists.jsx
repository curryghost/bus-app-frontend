import { BusStopsDetails } from "../BusStopDetails/NearbyBusStopsDetails"
import { Container, Accordion, AccordionSummary, AccordionDetails, Grid, Typography } from "@mui/material"
import { useState } from "react"

export const BusStopLists = ({ busStop }) => {
    const [expanded, setExpanded] = useState(false)

    const handleChange = (index) => (_event, newExpanded) => setExpanded(newExpanded ? index : false);

    return (
        <Container disableGutters sx={{ bgcolor: 'secondary.main' }}>
            {
                busStop.map((value, index) =>
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
                            <BusStopsDetails busStopCode={value.BusStopCode} index={index} expanded={expanded} />
                        </AccordionDetails>
                    </Accordion>
                )
            }
        </Container>
    )
}