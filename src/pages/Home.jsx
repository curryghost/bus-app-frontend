import { Typography, FormControl, InputLabel, Input } from "@mui/material";
import Grid2 from '@mui/material/Unstable_Grid2';
import { NearbyBusStopsLists } from "../comps/NearbyBusStopsLists/NearbyBusStopsLists";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import { SearchBusStop } from "../comps/SearchBusStop/SearchBusStop";

export const Home = () => {
    const [input, setInput] = useState("");

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    return (
        <>
            <Grid2 container flexDirection='column' alignItems='center' disableGutters={true} sx={{ bgcolor: 'secondary.main' }}>
                <Typography variant="h5" textAlign='center' fontWeight='600' bgcolor='secondary.main' color='#fff' sx={{ py: 3 }}>Nearby Bus</Typography>
                <Grid2 >
                    <FormControl
                        sx={{ m: 1 }}>
                        <InputLabel htmlFor="search" sx={{ color: '#fff', '&.Mui-focused': { color: '#fff' } }}>Search</InputLabel>
                        <Input id="search" value={input} onChange={handleChange} endAdornment={<SearchIcon sx={{ color: '#fff' }} />}
                            sx={{ color: '#fff', '::before': { borderBottom: '1px solid #fff' }, '::after': { borderBottom: '1px solid #fff' }, borderBottom: '1px solid #fff' }} />
                    </FormControl>
                </Grid2>
            </Grid2>
            {input === "" ? <NearbyBusStopsLists /> : <SearchBusStop input={input} />}
        </>
    )
}