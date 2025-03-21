import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {useMediaQuery, useTheme} from "@mui/material";

const MediaCard = ({imageUrl}) => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Card sx={{minWidth: 300, maxWidth: 400 }}>
            <CardMedia
                sx={{ height: 300 }}
                image={imageUrl}
                alt="this is a picture of an animal"
            />
            <CardContent>
                <Typography gutterBottom={false} variant="h5" component="div">
                    Isn't it nice?
                </Typography>
            </CardContent>
        </Card>
    );
}

export default MediaCard;