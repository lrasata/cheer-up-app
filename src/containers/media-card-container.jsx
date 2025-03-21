import {useContext, useEffect, useState} from "react";
import MediaCard from "../components/media-card.jsx";
import {Box, Button, Stack, useMediaQuery, useTheme} from "@mui/material";
import {fetchData} from "../util/http.js";
import {QuestionContext} from "../store/question-context.jsx";

const MediaCardContainer = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [animalPhoto, setAnimalPhoto] = useState();
    const { animalCategory} = useContext(QuestionContext);

    useEffect(() => {
        if (animalCategory !== '') {
            fetchData(setAnimalPhoto, animalCategory)
        }

    }, [animalCategory]);

    const handleClickShowAnother = () => {
        fetchData(setAnimalPhoto, animalCategory)
    }


    return <>
        {animalPhoto && animalPhoto.url &&
            <Box display="flex"
                 justifyContent="center"
                 alignItems="center"
                 my={2}>
                <Stack spacing={2} direction="column">
                    <MediaCard imageUrl={animalPhoto.url}/>
                    <Button variant="contained" color="primary" fullWidth={isMobile} onClick={handleClickShowAnother}>
                        Show another one
                    </Button>
                </Stack>
            </Box>
        }
    </>
}

export default MediaCardContainer;