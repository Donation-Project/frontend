//#region react
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//#endregion

import { Button, Card, Typography, Toolbar, Grid, AppBar, Stack } from '@mui/material';

export default function BarApp() {
  const navigate = useNavigate();
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
              <Button style={{ backgroundColor: 'white', color: 'black' }} onClick={() => {
                navigate("/post-LoginPage");
              }}>LOGIN</Button>
            </Stack>
          </Toolbar>
        </AppBar>
      </Card>
    </Grid>
  );
}
