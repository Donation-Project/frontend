import * as React from 'react';
import BarApp from '../ui/BarApp';
import MainPageCard from '../ui/MainPageCard';
//#region mui
import { Box, Grid } from '@mui/material';
//#endregion

export default function MediaCard() {
    return (
        <Grid sx={{ flexGrow: 1 }}>
            <BarApp></BarApp>
            <MainPageCard></MainPageCard>
        </Grid>
    );
}
