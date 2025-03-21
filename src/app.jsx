import './app.css'
import {Box, Button, Typography, useMediaQuery, useTheme} from "@mui/material";
import AlertInfo from "./components/alert-info.jsx";
import Question from "./components/question.jsx";
import MediaCard from "./components/media-card.jsx";


function App() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            <Box paddingBottom={6}>
                <AlertInfo/>
            </Box>
            <Typography variant="h2" component="h1">Cheer up with a nice animal picture</Typography>
            <Box py={4}>
                <Question/>
            </Box>
            <Box display="flex"
                 justifyContent="center"
                 alignItems="center"
                 my={2}>
                <MediaCard/>
            </Box>

            <Button variant="contained" color="primary" fullWidth={isMobile}>
                Show
            </Button>
        </>
    )
}

export default App
