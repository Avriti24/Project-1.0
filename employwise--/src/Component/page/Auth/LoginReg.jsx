import React from 'react'
import {Grid, Card, Typography, Tabs, Tab,Box} from '@mui/material';

const LoginReg = () => {
  return <>
  <Grid container>
    <Grid item lg={7} sm={5}>
        <Card sx={{width:'100%',height:'100%'}}>
            <Box>
                <Box sx={{}}>
                    <Tabs>
                        <Tab label="Login"></Tab>
                    </Tabs>
                </Box>
            </Box>
        </Card>

    </Grid>
    </Grid></>
}

export default LoginReg