//#region react
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
//#endregion

//#region mui
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
//#endregion


export default function LoginPage() {
    const navigate = useNavigate();

    //#region useState 변수
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const BASEURL = process.env.REACT_APP_APIURL
    //#endregion

    //#region 서버연결
    const instance = axios.create({
        baseURL: BASEURL
    });
    //#endregion

    //#region 로그인
    async function Login() {
        await instance.post('/api/login', {
            email: id, password: pw
        }).then(function (response) {
            if (response.data.success) {
                alert("로그인 성공")
                navigate("/", { state: id });
            }
        }).catch(function (error) {
            alert(`${error.response.data.error.errorMessage}`);
            window.location.replace("post-LoginPage")
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
                <Typography component="h1" variant="h5">
                    로그인
                </Typography>
                <Box component="form" onSubmit={(e) => {
                    e.preventDefault();
                }} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Email_ID"
                        autoFocus
                        onChange={(e) => setId(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Password"
                        type="password"
                        autoComplete="on"
                        onChange={(e) => setPw(e.target.value)}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="아이디 저장"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={async () => {
                            Login()
                        }}
                    >
                        로그인
                    </Button>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mb: 5 }}
                        onClick={async () => {
                            navigate("/")
                        }}
                    >
                        메인페이지
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                패스워드 찾기
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link onClick={() => {
                                navigate("/post-NewMemberPage")
                            }} variant="body2">
                                {"회원가입"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
    //#endregion
}