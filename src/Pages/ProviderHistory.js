// import FixedBottomNavigation from '../Components/NavBottom'
import LogItem from '../Components/LogItem'
import {banks} from "../DummyData/dummyData"
import Typography from '@mui/material/Typography';

const ProviderHistory = () => {
  return (
    <>
      <Typography sx={{textAlign:"center", fontWeight:600, p:2}}>Provider History</Typography>
      <LogItem user={'provider'} banks={banks} />
    </>
  )

}

export default ProviderHistory