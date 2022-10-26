import React, { useState } from 'react';
//#region mui
import { Avatar, Grid, Card, CardHeader, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
//#endregion

export default function SponsorshipCard(props) {
    const { card } = props;
    console.log(card)
    return (
        <Grid container
            mt={2}
            direction="row"
            justifyContent="center"
            alignItems="stretch">
            <Grid sx={{ minWidth: '90%', maxWidth: '90%' }} >
                <Card>
                    <CardHeader
                        avatar={
                            <Avatar src={card.userRespDto.profileImage} />
                        }
                        title={<Typography sx={{ fontSize: 25 }}>{card.userRespDto.name}</Typography>}
                        subheader={<Typography sx={{ fontSize: 20 }}>{card.userRespDto.email}</Typography>}
                    />
                    <CardContent>
                        <Typography sx={{ fontSize: 35 }}>
                            {card.write.title}
                        </Typography>&nbsp;
                        <Typography sx={{ fontSize: 30 }}>
                            {card.write.content}
                        </Typography>&nbsp;
                        <Typography sx={{ fontSize: 25 }}>
                            카테고리 : {card.category}
                        </Typography>&nbsp;
                        <Typography sx={{ fontSize: 25 }}>
                            요청금액 : {card.amount}
                        </Typography>
                    </CardContent>
                    <CardMedia
                        component="img"
                        image={card.postMainImage}
                    />
                    {/* <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <CardMedia
                            component="img"
                            image={card.postMainImage}
                            sx={{ maxWidth: 500 }}
                        />
                    </Grid> */}
                    <CardActions>
                        <Button variant="contained">
                            <Typography sx={{ fontSize: 25 }}> HELP</Typography>
                        </Button>
                    </CardActions>
                </Card>
                &nbsp;
            </Grid>
        </Grid >
    );
}
