import Grid from "@mui/material/Grid2";
import SmallMediaCard from "../components/small-media-card.jsx";
import {useContext} from "react";
import {AppContext} from "../store/app-context.jsx";
import {useMediaQuery, useTheme} from "@mui/material";


const SmallMediaCardContainer = () => {
    const {loadedImages, updateDisplayedImage, updateRunFetching } = useContext(AppContext);
    const theme = useTheme()
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    // do not display the first image, it is already displayed in another section
    let loadedImagesToShow = [];
    if (loadedImages.length > 0) {
        loadedImagesToShow = loadedImages.slice(1);
    }

    const handleOnClick = (image) => {
        updateDisplayedImage(image);
        updateRunFetching(false)
    }

    return (
        <>
            {
                loadedImagesToShow.length > 0 && <Grid container spacing={2}>
                    {loadedImagesToShow.map((image, index) => (
                        <Grid sx={{width: isDesktop ? 'fit-content !important' : '100%'}} size={{xs: 12, md: 4}} key={`${image.imageId}-${index}`}>
                            <SmallMediaCard imageUrl={image.imageUrl} callBackFunc={() => handleOnClick(image)} />
                        </Grid>
                    ))}
                </Grid>
            }
        </>

    )
}

export default SmallMediaCardContainer;