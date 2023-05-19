import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Header = () => {
    return (
        <Box component="header" sx={{
            position: 'fixed',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            maxWidth: '900px',
            width: '900px',
            marginTop: '20px',
        }}>
            <Typography variant="h3">Fridge-It</Typography>
            <Button href="https://github.com/ChrisCavs/fridge-it" target="_blank" variant="outlined">GitHub</Button>
        </Box>
    )
}

export default Header