import {Typography} from "@mui/material";
import AppInfoAlert from "../components/app-info-alert.jsx";
import Question from "../components/question.jsx";
import MediaCardContainer from "../containers/media-card-container.jsx";
import SmallMediaCardContainer from "../containers/small-media-card-container.jsx";

const LandingPage = () => {

    return (
        <>
            <AppInfoAlert />
            <Typography variant="h4" component="h1">Cheer up with a nice animal picture</Typography>
            <Question />
            <MediaCardContainer />
            <SmallMediaCardContainer />
        </>
    )
}

export default LandingPage