import React, { useState } from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControl,
  Grid,
  Box,
  Container,
} from '@mui/material/';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Sidebar from './Sidebar';
import './Mypage.css';

const UserProfileEdit = () => {
  const [fileImage, setFileImage] = useState("");
  const fileInput = React.useRef(null);
  const theme = createTheme();


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  }


  const handleChange = e => {
    console.log(e.target.files[0]);
    setFileImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <ThemeProvider theme={theme}>

        <div className="app">
              <Sidebar />   
      <Container component="main" maxWidth="xs">
        
        <CssBaseline />

        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box>
              <Avatar  
                src={fileImage}
                sx={{ bgcolor: 'secondary.main', width: 200, height: 200 }} />
              <Button 
                variant="contained"
                component="label"
                type="submit"
                fullWidth
                size="large"
                sx={{ mt: 1 }}
                >
                    이미지 변경
                <input hidden accept="image/*" multiple type="file" style={{ display: "none" }} ref={fileInput}  onChange={handleChange}/>
              </Button>
          </Box>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <FormControl component="fieldset" variant="standard">
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField fullWidth id="name" name="name" label="이름" variant="filled" InputProps={{ readOnly: true,}}/>
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth id="email" name="email" label="이메일" variant="filled" InputProps={{ readOnly: true,}}/>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    type="password"
                    id="password"
                    name="password"
                    label="비밀번호"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    type="password"
                    id="rePassword"
                    name="rePassword"
                    label="비밀번호 재입력"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth id="name" name="name" label="메타마스크 주소" variant="filled" InputProps={{ readOnly: true,}} />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                size="large"
              >
                정보 수정
              </Button>
            </FormControl>
          </Box>
        </Box>
      </Container>

      </div>
    </ThemeProvider>
  );
};
export default UserProfileEdit;