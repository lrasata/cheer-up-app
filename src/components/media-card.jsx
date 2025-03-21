import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const MediaCard = () => {
    return (
        <Card sx={{ minWidth: 400 }}>
            <CardMedia
                sx={{ height: 300 }}
                image="https://cdn2.thedogapi.com/images/WIf5o1E8h.jpg"
                title="animal picture"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    A title
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    some text below here
                </Typography>
            </CardContent>
        </Card>
    );
}

export default MediaCard;
