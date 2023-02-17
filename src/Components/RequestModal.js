import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TextField from '@mui/material/TextField';

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

export default function RequestModal() {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div>
			<Box sx={{ mr: 'auto' }}>
				<Button onClick={handleOpen}>
					<AddCircleIcon style={{ fontSize: 80 }} />
				</Button>
			</Box>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography sx={{ textAlign: 'center', fontWeight: 600, p: 2 }}>
						Food Request
					</Typography>

					<Typography id="modal-modal-title" variant="h6" component="h2">
						Enter number of people need to be covered with food
					</Typography>

					<Box
						component="form"
						sx={{
							'& > :not(style)': { m: 1, width: '25ch' },
						}}
						noValidate
						autoComplete="off"
					>
						<TextField id="outlined-basic" variant="outlined" />
					</Box>

					<Button variant="contained">Request</Button>
				</Box>
			</Modal>
		</div>
	);
}
