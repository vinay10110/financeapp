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
            <Typography variant='h4' fontSize="18px" fontWeight={700}
              sx={{
                background: `linear-gradient(90deg, ${palette.primary[500]}, ${palette.secondary[500]})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '0.4px'
              }}
            >
                finance
            </Typography>
        </FlexBetween>
        <FlexBetween gap="0.75rem">
            <Box
              sx={{
                px: '0.75rem',
                py: '0.25rem',
                borderRadius: '999px',
                cursor: 'pointer',
                backgroundColor: selected === 'dashboard' ? 'rgba(139, 92, 246, 0.15)' : 'transparent',
                color: selected === 'dashboard' ? palette.primary[700] : palette.grey[700],
                '&:hover': {
                  backgroundColor: 'rgba(139, 92, 246, 0.25)',
                  color: palette.primary[700]
                }
              }}
            >
                <Link to='/'
                      onClick={()=>setSelected("dashboard")}
                      style={{
                        color:"inherit",
                        textDecoration:"none",
                      }}              
                >
                Dashboard
                </Link>
            </Box>
            <Box
              sx={{
                px: '0.75rem',
                py: '0.25rem',
                borderRadius: '999px',
                cursor: 'pointer',
                backgroundColor: selected === 'predictions' ? 'rgba(139, 92, 246, 0.15)' : 'transparent',
                color: selected === 'predictions' ? palette.primary[700] : palette.grey[700],
                '&:hover': {
                  backgroundColor: 'rgba(139, 92, 246, 0.25)',
                  color: palette.primary[700]
                }
              }}
            >
                <Link to='/predictions'
                      onClick={()=>setSelected("predictions")}
                      style={{
                        color:"inherit",
                        textDecoration:"none",
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