import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useLocation } from 'react-router-dom';

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

export default function HistoryModal({ user, button }) {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div>
			<Button onClick={handleOpen}>{button}</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					{user === 'Provider' && button === 'Track' && (
						<>
							<Typography id="modal-modal-title" variant="h6" component="h2">
								Thank you for your help!
							</Typography>
							<Typography id="modal-modal-description" sx={{ mt: 2 }}>
								The pickup will arrive to your place in 30 minutes.
							</Typography>
						</>
					)}
					{user === 'Bank' && button === 'Track' && (
						<>
							<Typography id="modal-modal-title" variant="h6" component="h2">
								Pickup is completed!
							</Typography>
							<Typography id="modal-modal-description" sx={{ mt: 2 }}>
								The food will arrive back to the bank in 40 minutes.
							</Typography>
						</>
					)}
					{button === 'Reason' && (
						<>
							<Typography id="modal-modal-title" variant="h6" component="h2">
								Thank you for your help!
							</Typography>
							<Typography id="modal-modal-description" sx={{ mt: 2 }}>
								But unfortunately we have declined your support as we are having
								some technical difficulties at the moment
							</Typography>
						</>
					)}
					{button === 'Summary' && (
						<>
							<Typography id="modal-modal-title" variant="h6" component="h2">
								Poke Bowl
							</Typography>
							<Typography id="modal-modal-description" sx={{ mt: 2 }}>
								50 people
							</Typography>
						</>
					)}
					{/* {button === 'Pending' &&
          <>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Pending...
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              No one has accepted your request yet!
            </Typography>
          </>
          } */}
				</Box>
			</Modal>
		</div>
	);
}
