import {useState} from 'react';
import { Link } from 'react-router-dom';
import { Box,Typography,useTheme } from '@mui/material';
import FlexBetween from '../../components/FlexBetween';
const Navbar=()=>{
    const [selected,setSelected]=useState('dashboard');
    const {palette} =useTheme();
    return(
        <FlexBetween mb="0.25rem" padding="0.5rem 0.5rem 0rem 0.5rem" color={palette.grey[300]}>
        <FlexBetween gap="0.75rem">
            <Typography variant='h4' fontSize="16px">
                finance
            </Typography>
        </FlexBetween>
        <FlexBetween gap="2rem">
            <Box sx={{"&:hover":{color:palette.primary[100]}}}>
                <Link to='/'
                      onClick={()=>setSelected("dashboard")}
                      style={{
                        color:selected==="dashboard"? "inherit" :palette.grey[700],
                        textDecoration:"inherit",
                      }}              
                >
                Dashboard
                </Link>
            </Box>
            <Box sx={{"&:hover":{color:palette.primary[100]}}}>
                <Link to='/predictions'
                      onClick={()=>setSelected("predictions")}
                      style={{
                        color:selected==="predictions"? "inherit" :palette.grey[700],
                        textDecoration:"inherit",
                      }}              
                >
                Predictions
                </Link>
            </Box>
        </FlexBetween>
        </FlexBetween>
    )
}
export default Navbar;