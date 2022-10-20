//#region react
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//#endregion

import { Button, Card, Typography, CardActions, CardMedia, CardContent, Grid } from '@mui/material';

export default function MainPageSlick() {
    const navigate = useNavigate();
    return (
        <Grid container
            mt={5}
            direction="column"
            alignItems="center"
            justify="center">
            <Card>
                <CardMedia
                    component="img"
                    sx={{ minWidth: 800, maxWidth: 800, minHeight: 600, maxHeight: 600 }}
                    image="https://www.compassion.or.kr/resources/fo/compassion/assets/images/sub/img_vision_trip_intro_01.png"
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                        도움이 필요한 애들
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small"><Typography variant="h5">
                        후원목록 보기러가기
                    </Typography></Button>
                </CardActions>
            </Card>
        </Grid>
    );
}
