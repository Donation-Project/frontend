//#region react
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
//#endregion

//#region mui
import { Avatar, Button, CssBaseline, TextField, Link, Grid, Box, Typography, Container } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
//#endregion

export default function NewMemberPage() {

    const navigate = useNavigate();

    //#region useState    
    const [useremail, setUseremail] = useState("");
    const [username, setUsername] = useState("");
    const [userpassword, setUserpassword] = useState("");
    const [MetaMaskAcc, setMetaMaskAcc] = useState("");
    const BASEURL = process.env.REACT_APP_APIURL
    //#endregion
    const instance = axios.create({
        baseURL: BASEURL
    });

    //#region 회원가입 버튼(이벤트)
    async function Sign_up() {
        await instance.post('/api/join', {
            email: useremail, name: username, password: userpassword, metamask: MetaMaskAcc
        }).then(function (response) {
            if (response.data.success) {
                alert("회원가입 성공")
                navigate("/post-LoginPage")
            }
        }).catch(function (error) {
            alert(`${error.response.data.error.errorMessage}`);
            window.location.replace("post-NewMemberPage")
        });
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
                    회원가입
                </Typography>
                <Box component="form" noValidate sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="given-name"
                                name="name"
                                required
                                fullWidth
                                id="name"
                                label="이름"
                                autoFocus
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="email"
                                label="email"
                                type="email"
                                id="email"
                                autoComplete="new-id"
                                onChange={(e) => setUseremail(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                                onChange={(e) => setUserpassword(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="MetaMaskAcc"
                                label="MetaMaskAcc"
                                name="MetaMaskAcc"
                                autoComplete="MetaMaskAcc"
                                onChange={(e) => setMetaMaskAcc(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, fontSize: 14 }}
                        onClick={() => {
                            Sign_up();
                        }}
                    >
                        회원가입
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link sx={{ fontSize: 15 }} onClick={() => {
                                navigate("/post-LoginPage");
                            }} variant="body2">
                                이미 아이디가 있는 경우
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
    //#endregion
}