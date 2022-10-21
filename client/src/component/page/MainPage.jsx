import * as React from 'react';
import BarApp from '../ui/BarApp';
import MainPage from '../ui/MainPage';
//#region mui
import { Box } from '@mui/material';
//#endregion

export default function MediaCard() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <BarApp></BarApp>
            <MainPage></MainPage>
        </Box>
    );
}
