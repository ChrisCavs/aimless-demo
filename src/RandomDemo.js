import React, { useContext, useState } from "react";
import Aimless from 'aimless.js'
import { Box, Button, Typography } from "@mui/material";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { DesktopContext } from "./App";
import { useTheme } from "@emotion/react";

const aimless = new Aimless()

const generateRandom = () => {
    return {
        bool: aimless.bool(),
        oneOf: aimless.oneOf([1,2,3]),
        intRange: aimless.intRange(0, 10),
        intSequence: aimless.intSequence(0, 2),
        char: aimless.char('awesome-sauce'),
        weighted: aimless.weighted([1,2], [1,5]),
    }
}

const RandomDemo = () => {
    const theme = useTheme()
    const [values, setValues ] = useState(generateRandom())
    const isDesktop = useContext(DesktopContext)

    const str1 = `bool()                        ${values.bool}`
    const str2 = `oneOf([1,2,3])                ${values.oneOf}`
    const str3 = `intRange(0,10)                ${values.intRange}`
    const str4 = `intSequence(0,2)              ${values.intSequence}`
    const str5 = `char('awesome-sauce')         ${values.char}`
    const str6 = `weighted([1,2], [1,5])        ${values.weighted}`
    return (
        <>
            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px'}}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: `${theme.palette.primary.main}` }}>Randomness</Typography>
                {isDesktop && <Button
                    variant="outlined"
                    onClick={() => setValues(generateRandom())}
                >
                    Regenerate
                </Button>}
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
                    <SyntaxHighlighter language="javascript" style={docco}>
                        {str2}
                    </SyntaxHighlighter>
                    <SyntaxHighlighter language="javascript" style={docco}>
                        {str3}
                    </SyntaxHighlighter>
                    <SyntaxHighlighter language="javascript" style={docco}>
                        {str4}
                    </SyntaxHighlighter>
                    <SyntaxHighlighter language="javascript" style={docco}>
                        {str5}
                    </SyntaxHighlighter>
                    <SyntaxHighlighter language="javascript" style={docco}>
                        {str6}
                    </SyntaxHighlighter>
                </Box>
                {!isDesktop && <Button
                    sx={{ margin: '20px 0 10px 0' }}
                    variant="outlined"
                    onClick={() => setValues(generateRandom())}
                >
                    Regenerate
                </Button>}
            </Box>
        </>
        
    )
}

export default RandomDemo