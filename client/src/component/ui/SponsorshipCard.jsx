//#region react
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
//#endregion

//#region mui
import { Link, Avatar, Grid, Card, CardHeader, CardMedia, CardContent, Typography, CardActions } from '@mui/material';
import TransactionCard from './TransactionCard';
//#endregion

//#region 라이브러리
import Donation from "../../contracts/Donation.json"
import Web3 from 'web3';
import axios from 'axios';
//#endregion

//#region 전역변수
let web3;
let web3instance;
let donation = Donation;
//#endregion

export default function SponsorshipCard(props) {

    const navigate = useNavigate();

    const postId = props.postId;
    const id = props.id;

    const [Recipient, setRecipient] = useState();
    const [RecipientEmail, setRecipientEmail] = useState();
    const [donationPrice, setDonationPrice] = useState();
    const [image, setImage] = useState();
    const [RecAvatar, setRecAvatar] = useState();
    const [title, setTitle] = useState();
    const [category, setCategory] = useState();
    const [content, setContent] = useState();
    const [card, setCard] = useState();
    const [transactions, setTransactions] = useState([]);
    //#region 서버연결
    useEffect(() => {
        const BASEURL = process.env.REACT_APP_APIURL
        const instance = axios.create({
            baseURL: BASEURL
        });
        instance.get(`/api/post/${postId}`)
            .then(function (response) {
                setCard(response.data.data)
                setRecipient(response.data.data.userRespDto.name)
                setDonationPrice(response.data.data.amount)
                setImage(response.data.data.postDetailImages[0])
                setRecAvatar(response.data.data.userRespDto.profileImage)
                setRecipientEmail(response.data.data.userRespDto.email)
                setTitle(response.data.data.write.title)
                setCategory(response.data.data.category)
                setContent(response.data.data.write.content)
            }).catch(function (error) {
                // 오류발생시 실행
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    //#endregion    

    useEffect(() => {
        async function load() {
            web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
            const networkId = await web3.eth.net.getId();
            const deployedNetwork = donation.networks[networkId];
            web3instance = new web3.eth.Contract(donation.abi, deployedNetwork.address);
            setTransactions(await web3instance.methods.getChracterMapping(postId).call());
        }
        load();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
                            <Avatar src={RecAvatar} />
                        }
                        title={<Typography sx={{ fontSize: 25 }}>{Recipient}</Typography>}
                        subheader={<Typography sx={{ fontSize: 20 }}>{RecipientEmail}</Typography>}
                    />
                    <CardContent>
                        <Typography sx={{ fontSize: 35 }}>
                            {title}
                        </Typography>&nbsp;
                        <Typography sx={{ fontSize: 30 }}>
                            {content}
                        </Typography>&nbsp;
                        <Typography sx={{ fontSize: 25 }}>
                            카테고리 : {category}
                        </Typography>&nbsp;
                        <Typography sx={{ fontSize: 25 }}>
                            요청금액 : {donationPrice}
                        </Typography>
                    </CardContent>
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <CardMedia
                            component="img"
                            image={image}
                            sx={{ maxWidth: 500 }}
                        />
                        &nbsp;
                    </Grid>
                    &nbsp;
                    <CardContent>
                        <TransactionCard transactions={transactions}></TransactionCard>
                    </CardContent>
                    <CardActions>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link sx={{ fontSize: 20 }} onClick={() => {
                                    navigate("/post-DonationPage", { state: [card, id] })
                                }} variant="body2">
                                    후원하러 가기
                                </Link>
                            </Grid>
                        </Grid>
                    </CardActions>
                </Card>
                &nbsp;
            </Grid>
        </Grid >
    );
}
