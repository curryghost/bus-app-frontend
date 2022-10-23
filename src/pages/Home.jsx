import { Typography } from "@mui/material";
import { NearbyBusStopsLists } from "../comps/NearbyBusStopsLists/NearbyBusStopsLists";

export const Home = () => {

    return (
        <>
            <Typography variant="h5" textAlign='center' fontWeight='600' bgcolor='secondary.main' color='#fff' sx={{ py: 3 }}>Nearby Bus</Typography>
            <NearbyBusStopsLists />
        </>
    )
}