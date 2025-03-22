import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from "./button.jsx";

const SmallMediaCard = ({imageUrl, callBackFunc}) => {
    return (
        <Card sx={{ display: 'flex' }}>
            <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={imageUrl}
                alt="image of an animal"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    <Button variant='text' color='primary' onClick={callBackFunc}>View again</Button>
                </Box>
            </Box>

        </Card>
    );
}

export default SmallMediaCard;