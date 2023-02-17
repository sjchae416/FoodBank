import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import Button from '@mui/material/Button';
import HistoryModal from './HistoryModal';
import { banks } from '../DummyData/dummyData';
import { providers } from '../DummyData/dummyData';

export default function LogItem({ user, banks }) {
	const data = user === 'provider' ? banks : providers;

	return (
		<Box sx={{ mx: 1 }}>
			{data.map((d) => (
				<Card sx={{ minWidth: 275, mb: 5 }}>
					<CardContent>
						<Grid container>
							<Grid item xs={2}>
								<Avatar src={d.image} />
							</Grid>

							<Grid item xs={6}>
								<Grid container>
									<Grid item xs={12}>
										<Typography sx={{ fontSize: 16, fontWeight: 600 }}>
											{d.name}
										</Typography>
									</Grid>
									<Grid item xs={12}>
										<Typography>{d.status}</Typography>
									</Grid>
								</Grid>
							</Grid>

							<Grid item xs={4} sx={{ pl: 1 }}>
								<Button
									variant="outlined"
									sx={{ borderColor: 'black', color: 'black', width: '100%' }}
								>
									<HistoryModal user={user} button={d.button} />
								</Button>
							</Grid>
						</Grid>
					</CardContent>
				</Card>
			))}
		</Box>
	);
}
