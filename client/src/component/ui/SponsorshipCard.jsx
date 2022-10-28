//#region react
import React, { useState, useEffect } from 'react';
//#endregion

//#region mui
import { Avatar, Grid, Card, CardHeader, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
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

    const postId = props.postId;
    const id = props.id;

    const [Sender, setSender] = useState();
    const [Recipient, setRecipient] = useState();
    const [RecipientAddress, setRecipientAddress] = useState();
    const [RecipientEmail, setRecipientEmail] = useState();
    const [donationPrice, setDonationPrice] = useState();
    const [image, setImage] = useState();
    const [RecAvatar, setRecAvatar] = useState();
    const [accounts, setAccounts] = useState("");
    const [title, setTitle] = useState();
    const [category, setCategory] = useState();
    const [content, setContent] = useState();

    useEffect(() => {
        async function load() {
            web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
            setAccounts(await web3.eth.getAccounts());
            const networkId = await web3.eth.net.getId();
            const deployedNetwork = donation.networks[networkId];
            web3instance = new web3.eth.Contract(donation.abi, deployedNetwork.address);
        }
        load();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //#region 서버연결
    useEffect(() => {
        const BASEURL = process.env.REACT_APP_APIURL
        const instance = axios.create({
            baseURL: BASEURL
        });
        instance.get(`/api/post/${postId}`)
            .then(function (response) {
                console.log(response.data.data)
                setRecipient(response.data.data.userRespDto.name)
                setRecipientAddress(response.data.data.userRespDto.metamask)
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
        instance.get(`/api/user/${id}`)
            .then(function (response) {
                setSender(response.data.data.name)
            }).catch(function (error) {
                // 오류발생시 실행
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    //#endregion
    //#region 구매(이벤트)
    async function Donation() {
        if (accounts.length === 0) {
            alert("메타마스크에 로그인이 필요한 작업입니다 로그인후 새로고침 해주세요")
        } else {
            try {
                await web3instance.methods.getDonation(RecipientAddress, Sender, Recipient, donationPrice).send({
                    from: accounts[0],
                    value: web3.utils.toWei(donationPrice, "ether"),    //wei
                    gas: 900000,
                })
            }
            catch (e) {
                alert(e.message);
            }
        }
    }
    //#endregion

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
                    {/* <CardMedia
                        component="img"
                        image={card.postMainImage}
                    /> */}
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
                    </Grid>
                    <CardActions>
                        <Button variant="contained" onClick={() => { Donation() }}>
                            <Typography sx={{ fontSize: 20 }}> DONATION</Typography>
                        </Button>
                    </CardActions>
                </Card>
                &nbsp;
            </Grid>
        </Grid >
    );
}
