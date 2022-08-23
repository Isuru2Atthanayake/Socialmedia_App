import React, { useState } from 'react'
import {AppBar,Box,styled,InputBase,Toolbar,Typography, Avatar, Menu, MenuItem} from "@mui/material"
import AdbIcon from '@mui/icons-material/Adb';
import MailIcon from '@mui/icons-material/Mail';
import Badge from '@mui/material/Badge';
import { Notifications } from '@mui/icons-material';
import img1 from '../images/girl.png';
import img2 from '../images/girl.jpg';

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

const Icons = styled(Box)(({theme})=>({ //if icons<600 then display none else display 
 display: 'none', gap:"20px", alignItems: 'center',
  [theme.breakpoints.up("sm")]:
  {display: "flex"}
}));

const UserBox = styled(Box)(({theme})=>({
  display: 'flex', gap:"10px", alignItems: 'center',
  [theme.breakpoints.up("sm")]:
  {display: "none"}
 }));

const Navbar = () => {
  const[open,setOpen] = useState(false)
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography varient="h6" sx={{display:{xs:"none",sm:"block"}}}> ISURU</Typography>
        <AdbIcon sx={{display:{xs:"block",sm:"none"}}}/>
        <Search><InputBase placeholder="Search..."/></Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon/>
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications/>
          </Badge>
          <Avatar sx={{width:30 , height:30}} alt="Cindy Baker" src={img1}
          onClick={e => setOpen(true)}
          />
        </Icons>
         <UserBox onClick={(e) => setOpen(true)}> {/* userbox is the mobile version */}
        <Avatar sx={{width:30 , height:30}} alt="Cindy Baker" src="" />
        <Typography variant="span">John</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
      </AppBar>
  )
}
export default Navbar;