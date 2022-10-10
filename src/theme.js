import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#c62828',
            light: '#ff5f52',
            dark: '#8e0000'
        },
        secondary: {
            main: '#673ab7',
            light: '#9a67ea',
            dark: '#320b86'
        }
    },
    typography: {
        fontFamily: 'Noto Serif Telugu, serif'
    }
})