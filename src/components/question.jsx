import {Box, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import {QuestionContext} from "../store/question-context.jsx";
import {useContext} from "react";
import Button from "./button.jsx";

const Question = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const { updateCategory} = useContext(QuestionContext);

    const handleClick = (category) => {
        updateCategory(category);
    }

    const buttons = <>
        <Button variant="outlined" fullWidth={isMobile} onClick={() => handleClick('cat')}>I'm a cat person</Button>
        <Button variant="outlined" fullWidth={isMobile} onClick={() => handleClick('dog')}>I'm a dog person</Button>
    </>



    return <>
        <Typography variant="body1" color="textPrimary">
            Would you rather prefer cats or dogs ?
        </Typography>
        {isMobile ?
            <>
            { buttons}
            </> :
            <Box display="flex"
                 justifyContent="center"
                 alignItems="center"
                 my={2}>
                <Stack spacing={2} direction="row">
                    {buttons}
                </Stack>
            </Box>

        }



    </>
}

export default Question;