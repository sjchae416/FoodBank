import React from 'react'
import LogItem from '../Components/LogItem'
import { restaurants } from '../DummyData/dummyData';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import { Box } from '@mui/system';
import { Card ,CardContent} from '@mui/material';
import {Grid} from '@mui/material';
import {Typography} from '@mui/material';
import { Avatar } from '@mui/material';

const BankHome = () => {
    
  return (
    <div>
        <Typography> Status</Typography>
        <Box sx={{ flexGrow: 1, p:5 }}>
           
      <LinearProgress variant="determinate" sx={{height:"30px"}}value={80} />
      

    </Box>
 
    {restaurants.map((bank) => (
        <Card sx={{ minWidth: 275, mb:5, }}>
          <CardContent>
            <Grid container>
              <Grid item xs={2}>
                <Avatar src={bank.image} />
              </Grid>

              <Grid item xs={6}>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography sx={{ fontSize: 16, fontWeight: 600 }}>{bank.name}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>{bank.status}</Typography>
                  </Grid>
                </Grid>
              </Grid> 

              {/* <Grid item xs={4} sx={{ pl: 1 }}>
                <Button variant="outlined" sx={{ borderColor: "black", color: "black", width: '100%' }}></Button>
                
              </Grid> */}
             </Grid>
          </CardContent>
        </Card>
      )) 
     } 

    </div>
  )
}

export default BankHome