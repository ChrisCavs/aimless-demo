import { useTheme } from '@emotion/react'
import Aimless from 'aimless.js'
import { Box, Button, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { DesktopContext } from './App'

const generateSpecial = () => {
    const seedFunc = Aimless.seedFunc(1330)
    const uniq = Aimless.uniqFuncSequence([1,2,3])

    return {
        seed1: Math.round(seedFunc() * 100) / 100,
        seed2: Math.round(seedFunc() * 100) / 100,
        seed3: Math.round(seedFunc() * 100) / 100,
        uniq1: uniq(),
        uniq2: uniq(),
        uniq3: uniq(),
        uniq4: uniq(),
    }
}

const SpecialGenerators = () => {
    const theme = useTheme()
    const isDesktop = useContext(DesktopContext)
    const [values, setValues] = useState(generateSpecial())

    const str1 = `rand = seedFunc(1330)`
    const str2 = `rand()                       ${values.seed1}`
    const str3 = `rand()                       ${values.seed2}`
    const str4 = `rand()                       ${values.seed3}`
    const str5 = `rand = uniqFuncSequence([1,2,3])`
    const str6 = `rand()                       ${values.uniq1}`
    const str7 = `rand()                       ${values.uniq2}`
    const str8 = `rand()                       ${values.uniq3}`
    const str9 = `rand()                       ${values.uniq4}`
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: `${theme.palette.primary.main}` }}>Special Generators</Typography>
                {isDesktop && <Button
                    variant="outlined"
                    onClick={() => setValues(generateSpecial())}
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
                </Box>
            </Box>
            <Typography sx={{ margin: '20px 0', textAlign: 'center' }}>Seed functions are preditably random.</Typography>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Box sx={{ fontSize: isDesktop ? '16px' : '14px', width: isDesktop ? '50%' : '100%' }}>
                    <SyntaxHighlighter language="javascript" style={docco}>
                        {str5}
                    </SyntaxHighlighter>
                    <SyntaxHighlighter language="javascript" style={docco}>
                        {str6}
                    </SyntaxHighlighter>
                    <SyntaxHighlighter language="javascript" style={docco}>
                        {str7}
                    </SyntaxHighlighter>
                    <SyntaxHighlighter language="javascript" style={docco}>
                        {str8}
                    </SyntaxHighlighter>
                    <SyntaxHighlighter language="javascript" style={docco}>
                        {str9}
                    </SyntaxHighlighter>
                </Box>
            </Box>
            <Typography sx={{ margin: '20px 0 10px 0', textAlign: 'center' }}>Unique functions will return unique.</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                {!isDesktop && <Button
                    sx={{ margin: '20px auto 10px auto' }}
                    variant="outlined"
                    onClick={() => setValues(generateSpecial())}
                >
                    Regenerate
                </Button>}
            </Box>
        </>
    )
}

export default SpecialGenerators