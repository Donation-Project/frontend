import * as React from 'react';
import BarApp from '../ui/BarApp';
import MainPageSlick from '../ui/MainPageSlick';
//#region mui
import { Grid } from '@mui/material';
//#endregion

export default function MediaCard() {
    return (
        <Grid alignItems="center"
            justify="center">
            <BarApp></BarApp>
            <MainPageSlick></MainPageSlick>
        </Grid>
    );
}
