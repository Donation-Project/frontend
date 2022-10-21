//#region react
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//#endregion

import { Button, Card, Typography, CardActions, CardMedia, CardContent, Grid } from '@mui/material';

export default function MainPage() {
    const navigate = useNavigate();
    return (
        <Grid container
            mt={2}
            direction="column"
            alignItems="center">
            <Grid sx={{ minWidth: '90%', maxWidth: '90%' }} >
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Card>
                            <CardMedia
                                component="img"
                                image="https://www.compassion.or.kr/resources/fo/compassion/assets/images/sub/img_vision_trip_intro_01.png"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="div">
                                    도움이 필요한 사람들
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small"><Typography variant="h5">
                                    후원목록 보기러가기
                                </Typography></Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography>홈페이지 소개</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography>후원글 등록</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography>공백 (나중에 체워놓을거)</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

