import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Snackbar from '@mui/material/Snackbar';
import { useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Format(props) {
  
  const navigate=useNavigate();
  const [open, setOpen] = React.useState(false);
  const [warnningOpen, setWarnningOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const [name, setName] = React.useState("");
  const [number, setNumber] = React.useState(0);
  const handleName = (data) => setName(data.target.value);
  const handleNumber = (data) => {
    if (isNaN(Number(data.target.value))) {
      setWarnningOpen(true)
      return;
    }else{
      setNumber(data.target.value);
    }
  }

  const handleClickWarnning = () => {
    setWarnningOpen(true);
  };
  const handleCloseWarnning = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setWarnningOpen(false);};
  const submit = () => {
    const foodData = {name: name, number: number}
    if (name == "" || number < 1){
      handleClickWarnning(true)
      return;
    }
    navigate("/provH");
    setName("");
    setNumber("");
  }
  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>{props.buttonName}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Food 
          </Typography>
          <Alert severity="info">
          <AlertTitle>Info</AlertTitle>
            <strong>We need food for {props.requiredFood} people.</strong>
          </Alert>
          <TextField
          label="Food Name"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '32ch' }}
          value = {name}
          onChange = {handleName}
        />
          <TextField
          label="Number of foods you can donate"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '32ch' }}
          value = {number}
          onChange = {handleNumber}
        />
        <Button variant="contained" endIcon={<SendIcon />} onClick={submit}>
          Send
        </Button>
        <Snackbar open={warnningOpen} autoHideDuration={1000} onClose={handleCloseWarnning}>
        <Alert sx={{ width: '100%' }} onClose={handleCloseWarnning} severity="error">Incorrect Input</Alert>
          
        </Snackbar>
        </Box>
      </Modal>
    </div>
  );
}
