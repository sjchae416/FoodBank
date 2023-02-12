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

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Link as Link1} from "react-router-dom"
// import {auth} from "../../firebase"
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import {AuthContext} from "../../App"
import { useNavigate } from "react-router-dom";
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

export default function SignIn() {
  const navigate = useNavigate();
//   const {currentUser, setCurrentUser}= React.useContext(AuthContext);
  
  // const [currentUser, setCurrentUser]= userState
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
            FoodBank
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            
            <Grid container>
              <Grid item xs>
              <Button sx={{fontSize:"0.7rem", textDecoration:"underline"}} >
                  Forgot password
                </Button>
              </Grid>
              <Grid item>
              <Button sx={{fontSize:"0.7rem", textDecoration:"underline"}}>
                  "Sign Up"
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
        </Grid>
        </Grid>
      
      
    </ThemeProvider>
  );
}