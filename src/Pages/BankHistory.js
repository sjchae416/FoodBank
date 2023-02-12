import LogItem from '../Components/LogItem'
import {providers} from "../DummyData/dummyData"
import Typography from '@mui/material/Typography';

const BankHistory = () => {
  return (
    <>
      <Typography sx={{textAlign:"center", fontWeight:600, p:2}}>Food Bank History</Typography>
      <LogItem user={'Bank'} providers={providers} />
    </>
  )

}

export default BankHistory