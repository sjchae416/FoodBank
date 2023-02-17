import React from 'react';
import FixedBottomNavigation from '../Components/NavBottom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Stack from '@mui/material/Stack';
import RequestItem from '../Components/Item';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { companyDatas } from '../DummyData/dummyData';
import NavBottom from '../Components/NavBottom';
const Home = (props) => {
	return (
		<>
			<Grid>
				<Box sx={{ width: '100%', maxWidth: 500, marginTop: 4 }}>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-around',
							mb: 2,
						}}
					>
						<Typography
							gutterBottom
							style={{ textAlign: 'center', fontWeight: 600, pr: 5 }}
						>
							Request List
						</Typography>
						<Box sx={{ mb: 1, fontSize: 10 }}>
							<LocationOnIcon sx={{ height: 10 }} />
							100 Circle Road
						</Box>
					</Box>

					<Stack spacing={2}>
						{companyDatas.map((companyData) => (
							<RequestItem data={{ companyData }} />
						))}
					</Stack>
				</Box>
				{/* <ImageCarousel images={[foodImage]}/> */}
				<FixedBottomNavigation />
			</Grid>
			<NavBottom userValue={props.value} />
		</>
	);
};

export default Home;
