// import FixedBottomNavigation from '../Components/NavBottom'
import LogItem from '../Components/LogItem'
import {banks} from "../DummyData/dummyData"
import Typography from '@mui/material/Typography';
import NavBottom from "../Components/NavBottom"
const ProviderHistory = (props) => {
  return (
    <>
      <Typography sx={{textAlign:"center", fontWeight:600, p:2}}>Provider History</Typography>
      <LogItem user={'provider'} banks={banks} />
      <NavBottom userValue={props.value} />
    </>
  )

}

export default ProviderHistory