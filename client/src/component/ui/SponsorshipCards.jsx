//#region react
import React from 'react';
import { useNavigate } from "react-router-dom";
//#endregion

//#region mui
import {CardActionArea, Avatar, CardHeader, Card, CardActions, CardMedia, Grid, CardContent, Typography, Button } from '@mui/material';
//#endregion

export default function SponsorshipCards(props) {

    const { cards, id } = props;

    const navigate = useNavigate();

    function LookButton(card) {
        if (id != null) {
            navigate("/post-SponsorshipPage", { state: [id, card] });
        } else {
            alert("로그인이 필요한 작업입니다.");
            navigate("/post-LoginPage");
        }
    }

    return (
        <Grid container spacing={4}>
            {cards.map((card) => (
                <Grid item xs={5} sm={4} md={4} key={card.postId}>
                    <Card
                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                    >
                        <CardHeader
                            avatar={
                                <Avatar src={card.userRespDto.profileImage}/>
                            }
                            title={<Typography sx={{ fontSize: 20 }}>{card.userRespDto.name}</Typography>}
                        />
                        <CardActionArea onClick={() => {
                                LookButton(card);
                            }}>
                        <CardMedia
                            component="img"
                            sx={{
                                // 16:9
                                pt: '0%',
                                minHeight: 350,
                                maxHeight: 350
                            }}
                            src={card.postMainImage}
                            alt="random"
                        />
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }}>카테고리 : {card.category}</Typography>
                            <Typography sx={{ fontSize: 14 }}>요청금액 : {card.amount}</Typography>
                        </CardContent>                        
                        </CardActionArea>                        
                    </Card>
                </Grid>
            ))}
        </Grid>)
}
