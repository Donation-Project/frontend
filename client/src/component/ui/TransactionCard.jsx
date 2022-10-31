//#region react
import React from 'react';
//#endregion

//#region mui
import { Card, Grid, CardContent, Typography } from '@mui/material';
//#endregion

export default function TransactionCard(props) {

    const { transactions } = props;

    return (
        <Grid container
            mt={2}
            direction="row"
            justifyContent="center"
            alignItems="stretch"
        >
            <Grid sx={{ width: '50%' }} >
                <Typography sx={{ fontSize: 20 }}>후원 기록</Typography>&nbsp;
                {transactions.map((transaction) => (
                    <Grid item key={transaction.donationPrice}>
                        <Card
                            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                        >
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }}>후원자명 : {transaction.Sender}</Typography>
                                <Typography sx={{ fontSize: 14 }}>후원금액 : {transaction.donationPrice}</Typography>
                            </CardContent>
                        </Card>&nbsp;
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}
