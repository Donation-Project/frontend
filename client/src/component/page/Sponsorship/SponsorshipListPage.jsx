import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import axios from 'axios';
import BarApp from '../../ui/BarApp';
import SponsorshipCards from '../../ui/SponsorshipCards';
//#region mui
import { Grid } from '@mui/material';
//#endregion
export default function SponsorshipListPage() {

    const location = useLocation();

    const [id] = useState(location.state);
    const [cards, setCardsLow] = useState([]);

    useEffect(() => {
        const BASEURL = process.env.REACT_APP_APIURL
        //#region 서버연결
        const instance = axios.create({
            baseURL: BASEURL
        });
        instance.get("/api/post?page=0&size=10")
            .then(function (response) {
                setCardsLow(response.data.data.content)
            }).catch(function (error) {
                // 오류발생시 실행
            })
        //#endregion
    }, [])

    return (
        <Grid sx={{ flexGrow: 1 }}>
            <BarApp id={id}></BarApp>
            <Grid container
                mt={3}
                direction="column"
                alignItems="center"
                justify="center">
                <Grid sx={{ minWidth: '90%' }}>
                    <SponsorshipCards cards={cards} id={id}></SponsorshipCards>
                </Grid>
            </Grid>
        </Grid>
    );
}
