import Grid from "@mui/material/Grid2";
import SmallMediaCard from "../components/small-media-card.jsx";
import {useContext} from "react";
import {AppContext} from "../store/app-context.jsx";


const SmallMediaCardContainer = () => {
    const {loadedImages} = useContext(AppContext);

    // do not display the first image, it is already displayed in another section
    let loadedImagesToShow = [];
    if (loadedImages.length > 0) {
        loadedImagesToShow = loadedImages.slice(1);
    }

    return (
        <>
            {
                loadedImagesToShow.length > 0 && <Grid container spacing={2}>
                    {loadedImagesToShow.map((image) => (
                        <Grid size={{xs: 12, md: 4}} key={image.imageId}>
                            <SmallMediaCard imageUrl={image.imageUrl}/>
                        </Grid>
                    ))}
                </Grid>
            }
        </>

    )
}

export default SmallMediaCardContainer;