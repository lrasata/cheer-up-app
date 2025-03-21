import {Box, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import {AppContext} from "../store/app-context.jsx";
import {useContext} from "react";
import Button from "./button.jsx";

const Question = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const { updateCategory, updateRunFetching} = useContext(AppContext);

    const handleClick = (category) => {
        updateCategory(category);
        updateRunFetching(true)
    }

    const buttons = <>
        <Button variant="outlined" fullWidth={isMobile} onClick={() => handleClick('cat')}>I'm a cat person</Button>
        <Button variant="outlined" fullWidth={isMobile} onClick={() => handleClick('dog')}>I'm a dog person</Button>
    </>

    return <Box my={2}>
        <Typography variant="body1" color="textPrimary">
            Would you rather prefer cats or dogs ?
        </Typography>
        {isMobile ?
            <Box my={2}>
                <Stack spacing={2} direction="column">
                    {buttons}
                </Stack>
            </Box> :
            <Box display="flex"
                 justifyContent="center"
                 alignItems="center"
                 my={2}>
                <Stack spacing={2} direction="row">
                    {buttons}
                </Stack>
            </Box>
        }
    </Box>
}

export default Question;