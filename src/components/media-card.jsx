import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const MediaCard = ({imageUrl}) => {
    return (
        <Card sx={{ minWidth: 400, maxWidth: 500 }}>
            <CardMedia
                sx={{ height: 300 }}
                image={imageUrl}
                title="animal picture"
            />
            <CardContent>
                <Typography gutterBottom={false} variant="h5" component="div">
                    Isn't it nice ?
                </Typography>
            </CardContent>
        </Card>
    );
}

export default MediaCard;
