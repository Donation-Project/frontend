//#region react
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router";
//#endregion

//#region mui
import { Avatar, Button, CssBaseline, TextField, Link, Grid, Box, Typography, Container } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
//#endregion

//#region 라이브러리
import Donation from "../../../contracts/Donation.json"
import Web3 from 'web3';
import axios from 'axios';
//#endregion

//#region 전역변수
let web3;
let web3instance;
let donation = Donation;
//#endregion

export default function DonationPage() {

    const navigate = useNavigate();
    const location = useLocation();

    //#region useState
    const [id] = useState(location.state[1]);
    const [Sender, setSender] = useState();
    const [accounts, setAccounts] = useState("");
    const [donationprice, setDonationPrice] = useState();
    const [RecipientAddress] = useState(location.state[0].userRespDto.metamask)
    const [Recipient] = useState(location.state[0].userRespDto.name)
    const [RecipientEmail] = useState(location.state[0].userRespDto.email)
    const [requestamont] = useState(location.state[0].amount)
    //#endregion

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
            if (requestamont < donationprice) {
                alert("후원금액을 초과했습니다")
            } else {
                try {
                    await web3instance.methods.getDonation(RecipientAddress, Sender, Recipient, donationprice).send({
                        from: accounts[0],
                        value: web3.utils.toWei(donationprice, "ether"),    //wei
                        gas: 900000,
                    })
                }
                catch (e) {
                    alert(e.message);
                    window.location.replace("post-DonationPage")
                }
            }
        }
    }
    //#endregion

    //#region 렌더링
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography sx={{ fontSize: 25 }}>
                    Donation
                </Typography>
                <Box component="form" noValidate sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="outlined-read-only-input"
                                label="후원받는사람"
                                defaultValue={Recipient}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="outlined-read-only-input"
                                label="후원받는사람 email"
                                defaultValue={RecipientEmail}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="outlined-read-only-input"
                                label="후원요청 금액"
                                defaultValue={requestamont}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="given-name"
                                name="price"
                                required
                                fullWidth
                                id="price"
                                label="후원금액"
                                autoFocus
                                onChange={(e) => setDonationPrice(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, fontSize: 14 }}
                        onClick={() => {
                            Donation()
                        }}
                    >
                        Donation
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link sx={{ fontSize: 15 }} onClick={() => {
                                navigate("/", { state: id });
                            }} variant="body2">
                                메인페이지
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
    //#endregion
}