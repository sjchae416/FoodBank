import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import { useNavigate } from 'react-router-dom';

export default function FixedBottomNavigation({ userValue }) {
	const [value, setValue] = React.useState(0);
	const ref = React.useRef(null);
	const navigate = useNavigate();
	return (
		<Box sx={{ pb: 7 }} ref={ref}>
			<CssBaseline />
			<Paper
				sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
				elevation={3}
			>
				<BottomNavigation
					showLabels
					value={value}
					onChange={(event, newValue) => {
						setValue(newValue);
					}}
				>
					{userValue === 0 && (
						<>
							<BottomNavigationAction
								label="Home"
								icon={<HomeIcon />}
								onClick={() => {
									navigate('/home');
								}}
							/>
							<BottomNavigationAction
								label="History"
								icon={<ArticleIcon />}
								onClick={() => {
									navigate('/provH');
								}}
							/>
						</>
					)}
					{userValue === 1 && (
						<>
							<BottomNavigationAction
								label="Home"
								icon={<HomeIcon />}
								onClick={() => {
									navigate('/bank');
								}}
							/>
							<BottomNavigationAction
								label="History"
								icon={<ArticleIcon />}
								onClick={() => {
									navigate('/bankH');
								}}
							/>
						</>
					)}

					<BottomNavigationAction
						label="Profile"
						icon={<AccountCircleIcon />}
						onClick={() => {
							navigate('/profile');
						}}
					/>
				</BottomNavigation>
			</Paper>
		</Box>
	);
}
