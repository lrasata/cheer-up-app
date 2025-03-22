import {Box, Typography} from "@mui/material";
import AppInfoAlert from "../components/app-info-alert.jsx";
import Question from "../components/question.jsx";
import MediaCardContainer from "../containers/media-card-container.jsx";
import SmallMediaCardContainer from "../containers/small-media-card-container.jsx";

const LandingPage = () => {

    return (
        <>
            <Box paddingBottom={3}>
                <AppInfoAlert/>
            </Box>
            <Typography variant="h2" component="h1">Cheer up with a nice animal picture</Typography>
            <Box py={2}>
                <Question/>
            </Box>
            <MediaCardContainer />

            <SmallMediaCardContainer />
        </>
    )
}

export default LandingPage