import { Typography } from "@mui/material";
import { NearbyBusStopsLists } from "../comps/NearbyBusStopsLists/NearbyBusStopsLists";

export const Home = () => {

    return (
        <>
            <Typography variant="h4" sx={{ px: 6, py: 2, fontWeight: 600 }}>Nearby Bus</Typography>
            <NearbyBusStopsLists />
        </>
    )
}