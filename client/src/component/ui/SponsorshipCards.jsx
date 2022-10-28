//#region react
import React from 'react';
import { useNavigate } from "react-router-dom";
//#endregion

//#region mui
import { CardActionArea, Avatar, CardHeader, Card, CardActions, CardMedia, Grid, CardContent, Typography, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
//#endregion

export default function SponsorshipCards(props) {

    const { cards, id } = props;

    const navigate = useNavigate();

    function LookButton(card) {
        if (id != null) {
            navigate("/post-SponsorshipPage", { state: [id, card.postId] });
        } else {
            alert("로그인이 필요한 작업입니다.");
            navigate("/post-LoginPage");
        }
    }

    return (
        <Grid container
            mt={2}
            direction="row"
            justifyContent="center"
            alignItems="stretch">
            <Grid sx={{ minWidth: '90%', maxWidth: '90%' }} >
                <Grid container spacing={2}>
                    {cards.map((card) => (
                        <Grid item xs={5} sm={4} md={3} key={card.postId}>
                            <Card
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                            >
                                <CardHeader
                                    avatar={
                                        <Avatar src={card.userRespDto.profileImage} />
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
                                            minHeight: 400,
                                            maxHeight: 400
                                        }}
                                        src={card.postMainImage}
                                        alt="random"
                                    />
                                    <CardContent>
                                        <Typography sx={{ fontSize: 14 }}>카테고리 : {card.category}</Typography>
                                        <Typography sx={{ fontSize: 14 }}>요청금액 : {card.amount}</Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteIcon />
                                    </IconButton>
                                    <IconButton aria-label="add to favorites">
                                        <ShareIcon />
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                &nbsp;
            </Grid>
        </Grid>)
}
