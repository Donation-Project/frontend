//#region react
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//#endregion

import { Button, Card, Typography, CardActions, CardMedia, CardContent, Grid, Box } from '@mui/material';

//#region image
import image1 from "../image/후원목록이미지.png";
import image2 from "../image/후원등록이미지.jpg";
import image3 from "../image/블록체인.png";
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
                        <Card style={{ height: '100%' }}>
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
                    <Grid item xs={4}>
                    <Card style={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                image={image3}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="div">
                                    블록체인을 활용한 후원시스템
                                </Typography><br />
                                <Typography variant="h5" color="text.secondary" >
                                    이 사이트는 블록체인을 활용하여 투명성이 보장된 후원 사이트입니다.
                                    사용자들은 후원 기록, 후원금액, 후원금 사용내역등을 확인할 수 있습니다.
                                    후원 기록들은 블록체인 네트워크 상에 저장되어있으며 블록체인
                                    특성상 블록체인 네트워크에 저장되어 있는 기록은 누구도 변경혹은 
                                    제거 할 수 없습니다.
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
                </Grid>&nbsp;
            </Grid>
        </Grid>
    );
}

