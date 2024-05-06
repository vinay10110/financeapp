import { Box } from "@mui/material";
import { styled } from "@mui/system";
const Dashboardbox=styled(Box)(({theme})=>({
    backgroundColor:theme.palette.background.light,
    borderRadius:'1rem',
   border:'1px solid #C0C0C0'
}))
export default Dashboardbox;