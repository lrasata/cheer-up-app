import {Box, Button, Typography, useMediaQuery, useTheme} from "@mui/material";
import AppInfoAlert from "../components/app-info-alert.jsx";
import Question from "../components/question.jsx";
import MediaCardContainer from "../containers/media-card-container.jsx";

const LandingPage = () => {

    return (
        <>
            <Box paddingBottom={6}>
                <AppInfoAlert/>
            </Box>
            <Typography variant="h2" component="h1">Cheer up with a nice animal picture</Typography>
            <Box py={4}>
                <Question/>
            </Box>
            <MediaCardContainer />
        </>
    )
}

export default LandingPage