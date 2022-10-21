//#region react
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//#endregion

import { Button, Card, Typography, CardActions, CardMedia, CardContent, Grid } from '@mui/material';

//#region image
import image1 from "../image/후원목록이미지.png";
import image2 from "../image/후원등록이미지.jpg";
//#endregion
export default function MainPageCard() {
    const navigate = useNavigate();
    return (
        <Grid container
            mt={2}
            direction="row"
            justifyContent="center"
            alignItems="stretch">
            <Grid sx={{ minWidth: '90%', maxWidth: '90%' }} >
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Card>
                            <CardMedia
                                component="img"
                                image={image1}
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
                    <Grid item xs={4} >
                        <Card>
                            <CardMedia
                                component="img"
                                image={image1}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="div">
                                    도움이 필요한 사람들
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card>
                            <CardMedia
                                component="img"
                                image={image2}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="div">
                                    후원등록
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={() => {
                                    navigate("/post-RegistrationPage");
                                }}><Typography variant="h5">
                                        후원등록
                                    </Typography></Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography>공백 (나중에 체워놓을거)</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

