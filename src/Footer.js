import { Box, Button, Divider, Typography } from "@mui/material";
import React, { useContext } from "react";
import { DesktopContext } from "./App";
import { useTheme } from "@emotion/react";

const Footer = () => {
    const isDesktop = useContext(DesktopContext)
    const theme = useTheme()
    return (
        <>
            <Divider sx={{ display: isDesktop ? 'block' : 'none', width: '85%', maxWidth: '800px', margin: '0 auto' }} />
            <Box sx={{
                position: isDesktop ? 'static' : 'fixed',
                display: 'flex',
                alignItems: 'center',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '100px',
                margin: '0 auto',
                backgroundColor: theme.palette.primary.main
            }}>
                <Box sx={{
                    width: isDesktop ? '100%' : '85%',
                    maxWidth: '800px',
                    margin: '0 auto',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <Typography sx={{
                        color: 'white',
                        width: isDesktop ? '250px' : '150px',
                        fontWeight: 'normal',
                    }}>
                        MIT © 2023 Christopher Cavalea
                    </Typography>
                    <Button
                        sx={{
                            color: 'white',
                            borderColor: 'white',
                        }}
                        href="https://github.com/ChrisCavs/aimless.js"
                        target="_blank"
                        variant="outlined"
                    >
                        On GitHub
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default Footer