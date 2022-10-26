//#region react
import React, { useState } from 'react';
import { useNavigate, useLocation } from "react-router";
import axios from 'axios';
//#endregion

//#region mui
import { Box, Container, Paper, Button, Typography, Grid, TextField, FormControlLabel, Checkbox, Card, CardMedia, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
//#endregion

//#region 이미지
import image1 from "../../image/후원목록이미지.png"
//#endregion

export default function RegistrationPage() {

    const navigate = useNavigate();
    const location = useLocation();

    //#region uesState 변수

    const [requestitem, setRequestitem] = useState("");
    const [agree, setAgree] = useState(false);
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");
    const [price, setPrice] = useState();
    const [files, setFiles] = useState(image1);
    const BASEURL = process.env.REACT_APP_APIURL
    const [id] = useState(location.state);
    //#endregion

    const instance = axios.create({
        baseURL: BASEURL
    });

    //#region 이미지 인코딩
    const encodeFileToBase64 = (fileBlob) => {
        const reader = new FileReader();
        reader.readAsDataURL(fileBlob);

        return new Promise((resolve) => {
            reader.onload = () => {
                setFiles(reader.result);
                resolve();
            };
        });
    };
    //#endregion

    //#region 동의여부
    function CheckBoxBool() {
        if (agree === false) {
            setAgree(true);
        }
        else if (agree === true) {
            setAgree(false);
        }
    }
    //#endregion

    //#region 등록
    function Registration() {
        if (agree === false) {
            alert("개인정보 열람 동의 항목에 체크해주세요")
        } else if (agree === true) {
            instance.post(`/api/post/${id}`, {
                title: title, content: contents, amount: price, category: "ETC", image: files
            }).then(function (response) {
                if (response.data.success) {
                    alert("등록 완료")
                    navigate("/", { state: id })
                }
            }).catch(function (error) {
                alert(`${error.response.data.error.errorMessage}`);
                window.location.replace("post-RegistrationPage")
            });
        }
    }
    //#endregion

    //#region 렌더링
    return (
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
            <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                <Typography component="h1" variant="h4" align="center">
                    후원 요청 등록
                </Typography>
                <br />
                <React.Fragment>
                    <React.Fragment>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Box sx={{ minWidth: 200 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">요청 항목</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Request item"
                                            value={requestitem}
                                            onChange={(e) =>
                                                setRequestitem(e.target.value)
                                            }
                                        >
                                            <MenuItem value={"병원비"}>병원비</MenuItem>
                                            <MenuItem value={"생활비"}>생활비</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="title"
                                    label="제목"
                                    fullWidth
                                    variant="standard"
                                    onChange={(e) => {
                                        setTitle(e.target.value)
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="Contents"
                                    label="내용"
                                    fullWidth
                                    variant="standard"
                                    onChange={(e) => {
                                        setContents(e.target.value)
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="request amount"
                                    label="요청금액 (ETH)"
                                    fullWidth
                                    variant="standard"
                                    onChange={(e) => {
                                        setPrice(e.target.value)
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <Card
                                    sx={{ height: '100%', display: 'flex' }}
                                >
                                    <CardMedia
                                        component="img"
                                        image={files}
                                        alt="random"
                                    />
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Button
                                    variant="contained"
                                    component="label"
                                >
                                    사진올리기
                                    <input
                                        type="file"
                                        hidden
                                        onChange={(e) => {
                                            encodeFileToBase64(e.target.files[0])
                                        }}
                                    />
                                </Button>&nbsp;
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary" onClick={CheckBoxBool} />}
                                    label="개인 정보 열람 동의"
                                />
                            </Grid>
                        </Grid>
                    </React.Fragment>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button
                            variant="contained"
                            sx={{ mt: 3, ml: 1 }}
                            onClick={() => {
                                Registration();
                            }}
                        >등록
                        </Button>
                        <Button
                            variant="contained"
                            sx={{ mt: 3, ml: 1 }}
                            onClick={() => {
                                navigate('/', { state: id });
                            }}
                        >취소
                        </Button>
                    </Box>
                </React.Fragment>
            </Paper>
        </Container>
    );
    //#endregion
}