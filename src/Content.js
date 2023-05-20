import React, { useContext } from "react";
import { Box, Divider, List, ListItem, ListItemIcon, ListItemText, Typography, useTheme } from "@mui/material";
import { LinkOff, PsychologyOutlined, ZoomIn } from "@mui/icons-material";
import { DesktopContext } from "./App";
import RandomDemo from "./RandomDemo";

const Content = () => {
    const isDesktop = useContext(DesktopContext)
    const theme = useTheme()

    return (
        <Box sx={{
            width: '85%',
            maxWidth: '800px',
            margin: '20px auto 300px auto',
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
            <Divider sx={{ margin: isDesktop ? '40px 0 40px 0' : '20px 0 28px 0' }} />
            <RandomDemo />
            <Divider sx={{ margin: isDesktop ? '40px 0 40px 0' : '20px 0 20px 0' }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: `${theme.palette.primary.main}`, marginBottom: '20px' }}>Special Generators</Typography>
            <Divider sx={{ margin: isDesktop ? '40px 0 40px 0' : '20px 0 20px 0' }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: `${theme.palette.primary.main}`, marginBottom: '20px' }}>Distributions</Typography>
        </Box>
    )
}

export default Content