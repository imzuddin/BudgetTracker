import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Paper } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type CardProps = {
    height: string,
}

export const GenericCard = ({height}:CardProps) => {
    return (
        <Paper elevation={6} style={{minWidth: "98vw", margin: "0px"}}>
            <Card style={{minWidth: "100%", minHeight: height}}>
                <CardContent>
                    <Typography> At A Glance </Typography>
                </CardContent>
                <CardActions>
                </CardActions>
            </Card>
        </Paper>
    )
}

