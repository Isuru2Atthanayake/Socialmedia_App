import React from 'react'
import {AppBar,Box,styled,InputBase,Toolbar,Typography} from "@mui/material"
import AdbIcon from '@mui/icons-material/Adb';
import MailIcon from '@mui/icons-material/Mail';
import Badge from '@mui/material/Badge';

const StyledToolbar = styled(Toolbar) ({
  display: 'flex',
  justifyContent: 'space-between',
})

const Search = styled("div")(({theme})=>({
  backgroundColor:"white",
  padding:"0 10px",
  borderRadius:theme.shape.borderRadius,
  width:"40%"
}))

const icons = styled(Box)(({theme})=>({
  backgroundColor:"white",
}))

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography varient="h6" sx={{display:{xs:"none",sm:"block"}}}> ISURU</Typography>
        <AdbIcon sx={{display:{xs:"block",sm:"none"}}}/>
        <Search><InputBase placeholder="Search..."/></Search>
        <icons><Badge badgeContent={4} color="error">
        <MailIcon/>
</Badge></icons>
      </StyledToolbar>
      </AppBar>
  )
}
export default Navbar;