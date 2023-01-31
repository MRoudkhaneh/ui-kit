import React from 'react'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

export const ApCard = ({text}: { text: string }) => {
    return (
        <Card sx={{minWidth: 275}}>
            <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                {text}
            </Typography>
        </Card>
    )
}
