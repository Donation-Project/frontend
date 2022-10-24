//#region react
import React from "react";
import { useNavigate } from "react-router-dom";
//#endregion

import { Button, Card, Typography, Toolbar, Grid, AppBar, Stack } from '@mui/material';

export default function BarApp(props) {

  const { name } = props;

  const navigate = useNavigate();

  function LoginConfirmation() {
    if (name != null) {
      return (
          <Button style={{ backgroundColor: 'white', color: 'black' }} onClick={() => {
            navigate("/post-LoginPage");
          }}>LOGOUT</Button>
      )
    } else {
      return (
        <Button style={{ backgroundColor: 'white', color: 'black' }} onClick={() => {
          navigate("/post-LoginPage");
        }}>LOGIN</Button>
      )
    }
  }
  return (
    <Grid container
      mt={3}
      direction="column"
      alignItems="center"
      justify="center">
      <Card sx={{ minWidth: '90%' }} >
        <AppBar position="static" color="primary" enableColorOnDark>
          <Toolbar>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              MENU
            </Typography>
            <Stack spacing={2} direction="row">
              <Button style={{ backgroundColor: 'white', color: 'black' }}>PAGE</Button>
              <Button style={{ backgroundColor: 'white', color: 'black' }}>MYPAGE</Button>
              {LoginConfirmation()}
            </Stack>
          </Toolbar>
        </AppBar>
      </Card>
    </Grid>
  );
}
