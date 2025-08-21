import { Box } from "@mui/material";
import { styled } from "@mui/system";
const Dashboardbox=styled(Box)(({theme})=>({
    backgroundColor:theme.palette.background.paper,
    borderRadius:'1rem',
   border:`1px solid ${theme.palette.grey[300]}`,
   boxShadow:'0 8px 24px rgba(15, 23, 42, 0.06)',
   transition:'transform 200ms ease, box-shadow 200ms ease, background-color 200ms ease, border-color 200ms ease',
   '&:hover':{
        transform:'translateY(-4px)',
        boxShadow:'0 14px 32px rgba(15, 23, 42, 0.12)',
        borderColor:'transparent'
   }
}))
export default Dashboardbox;