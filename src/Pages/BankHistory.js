import LogItem from '../Components/LogItem';
import { providers } from '../DummyData/dummyData';
import Typography from '@mui/material/Typography';
import NavBottom from '../Components/NavBottom';
const BankHistory = (props) => {
	return (
		<>
			<Typography sx={{ textAlign: 'center', fontWeight: 600, p: 2 }}>
				Food Bank History
			</Typography>
			<LogItem user={'Bank'} providers={providers} />
			<NavBottom userValue={props.value} />
		</>
	);
};

export default BankHistory;
