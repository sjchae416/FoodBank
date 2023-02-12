import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Link as Link1} from "react-router-dom"
// import {auth} from "../../firebase"
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import {AuthContext} from "../../App"
import { useNavigate } from "react-router-dom";
import { WindowSharp } from '@mui/icons-material';
// import AdbIcon from '@mui/icons-material/Adb';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        Pineapple Brothers
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const theme = createTheme();

export default function Register({ setHide }) {
  React.useEffect(() => {
    setHide(2)
  })
    const [value, setValue] = React.useState('female');
    const handleChange = (event) => {
      setValue(event.target.value);
    };
  const registerHandler = () =>{
    console.log("hi");
    
    window.location.replace("/login")
  }
  const navigate = useNavigate();
  const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);

//     signInWithEmailAndPassword(auth,data.get('email'),data.get('password'))
//     .then((userCredential)=>{
//       // setCurrentUser(userCredential.user.email)
//         console.log(userCredential)
//         navigate("/")

//     })
//     .catch((error)=>{
//         console.log(error)
    // });
   

  };

  return (
    <ThemeProvider theme={theme}>
      
      
        {/* <CssBaseline /> */}
        <Grid container>
        <Grid item sm={6} md={6} sx={{backgroundColor:"rgba(0,0,0,0.8)"}}>
          {/* <Customer2/> */}
          </Grid>
          <Grid item sm={6} md={6}>

          <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            marginLeft:2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
         
          
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          
          <Typography component="h1" variant="h5">
            FoodBank Registeration
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="Comfirm Password"
              label="Comfirm Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <TextField
          id="outlined-read-only-input"
          label="My Contact Number"
          defaultValue=""
          sx={{ width: 2/3 }}
          style={{margin:0 }}
        />
            <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">Type</FormLabel>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
            >
                <FormControlLabel value="foodBank" control={<Radio />} label="Food Bank" />
                <FormControlLabel value="provider" control={<Radio />} label="Provider" />
            </RadioGroup>
            </FormControl>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={registerHandler}
            >
              Register
            </Button>
          </Box>
        </Box>
        
        </Container>
        </Grid>
        </Grid>
      
      
    </ThemeProvider>
  );
}