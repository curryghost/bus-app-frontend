import { Typography } from "@mui/material";
import { NearbyBusStopsLists } from "../comps/NearbyBusStopsLists/NearbyBusStopsLists";
import { useState } from "react";
import { SearchBusStop } from "../comps/SearchBusStop/SearchBusStop";
import { FloatingSearch } from "../comps/FloatingSearch/FloatingSearch";
import { useEffect } from "react";

export const Home = () => {
    const [heading, setHeading] = useState('Nearby Bus Stops')
    const [input, setInput] = useState("");

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    useEffect(() => {
        input === '' ? setHeading('Nearby Bus Stops') : setHeading('Search Bus Stops')
    }, [input])

    return (
        <>
            <FloatingSearch input={input} handleChange={handleChange} />
            <Typography variant="h5" textAlign='center' fontWeight='600' bgcolor='secondary.main' color='#fff' sx={{ py: 3 }}>{heading}</Typography>
            {input === "" ? <NearbyBusStopsLists /> : <SearchBusStop input={input} />}
        </>
    )
}