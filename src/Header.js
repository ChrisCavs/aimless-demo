import { Box, Button } from "@mui/material";
import React, { useContext } from "react";
import AimlessPNG from './aimless.png'
import { DesktopContext } from "./App";

const Header = () => {
    const isDesktop = useContext(DesktopContext)

    return (
        <Box component="header" sx={{
            display: 'flex',
            justifyContent: isDesktop ? 'space-between' : 'center',
            alignItems: 'center',
            maxWidth: '800px',
            height: '100px',
            width: isDesktop ? '85%' : '100%',
            margin: '20px auto 0 auto',
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                maxHeight: '100px',
                maxWidth: '400px',
                overflow: 'hidden',
                transform: `translateX(${isDesktop ? '-58px' : '-6px'})`,
            }}>
                <img style={{ width: '100%', height: 'auto' }} src={AimlessPNG} alt="aimless.js" />
            </Box>
            <Button sx={{ display: isDesktop ? 'block' : 'none'}} href="https://github.com/ChrisCavs/aimless.js" target="_blank" variant="outlined">On GitHub</Button>
        </Box>
    )
}

export default Header