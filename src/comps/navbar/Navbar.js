import { AppBar, Typography } from '@mui/material'
import { Box } from '@mui/system'

export const Navbar = () => {

    return (
        <Box>
            <AppBar position='sticky'>
                <Typography component='h6' variant='h5' sx={{ padding: '1rem 3rem' }}>
                    Bus App
                </Typography>
            </AppBar>
        </Box >
    )
}