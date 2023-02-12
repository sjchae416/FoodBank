import React from "react";
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import ProgressBar2 from "../Components/ProgressBar2"
import Paper from '@mui/material/Paper';
import Format from "./Format";
import Typography from '@mui/material/Typography';
import CompanyDesModal from "./CompanyDesModal";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  export default function RequestItem(props) {
    // console.log(props)
    const percentage = (props.data.companyData.donatedFood / props.data.companyData.requiredFood)*100;
    const requiredFood = props.data.companyData.requiredFood - props.data.companyData.donatedFood;
    return(
        <Item>
            <Stack direction="row" spacing={2} sx={{px:1}}>
                <Avatar src={props.data.companyData.imgURL} sx={{ width: 56, height: 56 }}/>
                <Stack spacing={1} sx={{width:300}}>
                    <CompanyDesModal data={props.data}/>
                    <ProgressBar2 value={percentage}/>
                    <Typography>
                        {props.data.companyData.donatedFood} / {props.data.companyData.requiredFood}
                    </Typography>
                </Stack>
                <Format buttonName="Donate"  requiredFood={requiredFood} handler={props.data.handler}/>
                {/* <Button variant="contained" endIcon={<SendIcon />}>Donate!</Button> */}
            </Stack>
        </Item>
    );
  }