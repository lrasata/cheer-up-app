import {useContext, useEffect, useRef} from "react";
import MediaCard from "../components/media-card.jsx";
import {Box, Stack, useMediaQuery, useTheme} from "@mui/material";
import {fetchData} from "../util/http.js";
import {AppContext} from "../store/app-context.jsx";
import Button from "../components/button.jsx";

const MediaCardContainer = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const { category, addImage, displayedImage, updateDisplayedImage, runFetching, updateRunFetching} = useContext(AppContext);
    const scrollRef = useRef(null);

    const executeScroll = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView();
        }
    }

    useEffect(() => {
        if (category !== ''  && runFetching) {
            fetchData(updateDisplayedImage, category)
        }
        executeScroll()
    }, [category]);

    useEffect(()=> {
        if (displayedImage && category && runFetching) {
            addImage({
                category,
                imageId: displayedImage.imageId,
                imageUrl: displayedImage.imageUrl
            });
        }
        executeScroll()
    }, [displayedImage])


    const handleClickShowAnother = () => {
        updateRunFetching(true)
        fetchData(updateDisplayedImage, category)
        executeScroll()
    }


    return <>
        {displayedImage && displayedImage.imageUrl &&
            <div ref={scrollRef}>
                <Box display="flex"
                     justifyContent="center"
                     alignItems="center"
                     my={2}
                >
                    <Stack spacing={2} direction="column">
                        <MediaCard imageUrl={displayedImage.imageUrl}/>
                        <Button variant="contained" fullWidth={isMobile} onClick={handleClickShowAnother} color="primary">
                            Show another one
                        </Button>
                    </Stack>
                </Box>
            </div>
        }
    </>
}

export default MediaCardContainer;