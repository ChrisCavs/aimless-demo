import React, { useContext } from "react";
import Aimless from 'aimless.js'
import { Box, Divider, List, ListItem, ListItemIcon, ListItemText, Typography, useTheme } from "@mui/material";
import { LinkOff, PsychologyOutlined, ZoomIn } from "@mui/icons-material";
import { DesktopContext } from "./App";

const Content = () => {
    const isDesktop = useContext(DesktopContext)
    const theme = useTheme()
    const aimless = new Aimless()

    return (
        <Box sx={{
            width: '85%',
            maxWidth: '800px',
            margin: '30px auto 0 auto',
        }}>
            <Box sx={{
                display: isDesktop ? 'flex' : 'block',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Typography variant="h5" sx={{
                    maxWidth: isDesktop ? '250px' : 'unset',
                    marginBottom: '10px',
                    color: `${theme.palette.primary.main}`,
                    textAlign: 'center',
                    marginRight: isDesktop ? '50px' : null,
                }}>
                    The missing JavaScript randomness library.
                </Typography>
                <List sx={{ width: '215px', margin: isDesktop ? 'unset': 'auto' }}>
                    <ListItem>
                        <ListItemIcon>
                            <ZoomIn sx={{fill: `${theme.palette.secondary.main}`}} />
                        </ListItemIcon>
                        <ListItemText primary="Tiny" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <PsychologyOutlined sx={{ fill: `${theme.palette.secondary.main}` }} />
                        </ListItemIcon>
                        <ListItemText primary="Unopinionated" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <LinkOff sx={{ fill: `${theme.palette.secondary.main}` }} />
                        </ListItemIcon>
                        <ListItemText primary="Dependency Free" />
                    </ListItem>
                </List>
            </Box>
            <Divider sx={{ margin: isDesktop ? '40px 0 48px 0' : '20px 0 28px 0' }} />
            <Typography variant="body1" sx={{ fontWeight: 'bold', color: `${theme.palette.primary.main}` }}>Random Numbers</Typography>
        </Box>
    )
}

export default Content