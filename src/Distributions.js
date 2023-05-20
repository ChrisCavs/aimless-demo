import { useTheme } from "@emotion/react";
import { Box, Button, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import Aimless from 'aimless.js'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { DesktopContext } from "./App";

const aimless = new Aimless()

const generateGraphPoints = () => {
    let val = 0
    const result = {
        left: 0,
        midLeft: 0,
        mid: 0,
        midRight: 0,
        right: 0,
    }
    for (let i = 0; i < 10000; i++) {
        val = aimless.normalDist(0, 1)
        if (val < -2) {
            result.left = result.left + 1
        } else if (val < -1) {
            result.midLeft = result.midLeft + 1
        } else if (val < 1) {
            result.mid = result.mid + 1
        } else if (val < 2) {
            result.midRight = result.midRight + 1
        } else if (val > 2) {
            result.right = result.right + 1
        }
    }
    return result
}

const Distributions = () => {
    const theme = useTheme()
    const isDesktop = useContext(DesktopContext)
    const [values, setValues] = useState(generateGraphPoints())

    const str1 = `normalDist(mean, std) // x 10k`

    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: `${theme.palette.primary.main}` }}>Distributions</Typography>
                {isDesktop && <Button
                    variant="outlined"
                    onClick={() => setValues(generateGraphPoints())}
                >
                    Generate Graph
                </Button>}
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '260px', marginBottom: '20px' }}>
                <Box sx={{ backgroundColor: theme.palette.secondary.main, width: '60px', height: `${values.left / 20}px`, margin: isDesktop ? '0 20px' : '0 5px' }} />
                <Box sx={{ backgroundColor: theme.palette.secondary.main, width: '60px', height: `${values.midLeft / 20}px`, margin: isDesktop ? '0 20px' : '0 5px' }} />
                <Box sx={{ backgroundColor: theme.palette.secondary.main, width: '60px', height: `${values.mid / 30}px`, margin: isDesktop ? '0 20px' : '0 5px' }} />
                <Box sx={{ backgroundColor: theme.palette.secondary.main, width: '60px', height: `${values.midRight / 20}px`, margin: isDesktop ? '0 20px' : '0 5px' }} />
                <Box sx={{ backgroundColor: theme.palette.secondary.main, width: '60px', height: `${values.right / 20}px`, margin: isDesktop ? '0 20px' : '0 5px' }} />
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Box sx={{ fontSize: isDesktop ? '16px' : '14px', width: isDesktop ? '50%' : '100%' }}>
                    <SyntaxHighlighter language="javascript" style={docco}>
                        {str1}
                    </SyntaxHighlighter>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                {!isDesktop && <Button
                    sx={{ margin: '20px auto 10px auto' }}
                    variant="outlined"
                    onClick={() => setValues(generateGraphPoints())}
                >
                    Generate Graph
                </Button>}
            </Box>
        </Box>
    )
}

export default Distributions