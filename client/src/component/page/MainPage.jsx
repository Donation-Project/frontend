import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import BarApp from '../ui/BarApp';
import MainPageCard from '../ui/MainPageCard';
//#region mui
import { Grid } from '@mui/material';
//#endregion
export default function MediaCard() {    

    const location = useLocation();
    const [username] = useState(location.state);
    return (
        <Grid sx={{ flexGrow: 1 }}>
            <BarApp name={username}></BarApp>
            <MainPageCard name={username}></MainPageCard>
        </Grid>
    );
}
