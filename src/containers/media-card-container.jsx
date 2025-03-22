import {useContext, useEffect, useState} from "react";
import MediaCard from "../components/media-card.jsx";
import {Box, Stack, useMediaQuery, useTheme} from "@mui/material";
import {fetchData} from "../util/http.js";
import {AppContext} from "../store/app-context.jsx";
import Button from "../components/button.jsx";

const MediaCardContainer = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [photo, setPhoto] = useState();
    const { category, addImage} = useContext(AppContext);

    useEffect(() => {
        if (category !== '') {
            fetchData(setPhoto, category)
        }

    }, [category]);

    useEffect(()=> {
        if (photo && category) {
            addImage({
                category,
                imageId: photo.id,
                imageUrl: photo.url
            });
        }
    }, [photo])


    const handleClickShowAnother = () => {
        fetchData(setPhoto, category)
    }


    return <>
        {photo && photo.url &&
            <Box display="flex"
                 justifyContent="center"
                 alignItems="center"
                 my={2}>
                <Stack spacing={2} direction="column">
                    <MediaCard imageUrl={photo.url}/>
                    <Button variant="contained" fullWidth={isMobile} onClick={handleClickShowAnother} color="primary">
                        Show another one
                    </Button>
                </Stack>
            </Box>
        }
    </>
}

export default MediaCardContainer;