//#region react
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
//#endregion
//#region mui
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
//#endregion


export default function NewMemberPage() {

    const navigate = useNavigate();

    //#region useState    
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [pw, setPw] = useState("");
    const [MetaMaskAcc, setMetaMaskAcc] = useState("");
    //#endregion

    //#region 회원가입 버튼(이벤트)
    function Sign_up() {
        navigate("/post-LoginPage");
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
                <Typography component="h1" variant="h5">
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
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <TextField
                                required
                                fullWidth
                                name="email"
                                label="email"
                                type="email"
                                id="email"
                                autoComplete="new-id"
                                onChange={(e) => setEmail(e.target.value)}
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
                                onChange={(e) => setPw(e.target.value)}
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
                        sx={{ mt: 3, mb: 2 }}
                        onClick={() => {
                            Sign_up();
                        }}
                    >
                        회원가입
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link onClick={() => {
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