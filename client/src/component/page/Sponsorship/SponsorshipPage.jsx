import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import BarApp from '../../ui/BarApp';
import SponsorshipCard from '../../ui/SponsorshipCard';
//#region mui
import { Grid } from '@mui/material';
//#endregion

export default function SponsorshipPage() {

    const location = useLocation();

    const [id] = useState(location.state[0]);
    const [postId] = useState(location.state[1]);    

    return (
        <Grid sx={{ flexGrow: 1 }}>
            <BarApp id={id}></BarApp>
            <SponsorshipCard postId={postId} id={id}></SponsorshipCard>
        </Grid>
    );
}
