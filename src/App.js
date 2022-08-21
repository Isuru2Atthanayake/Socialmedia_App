// import { Button, styled, Typography } from "@mui/material";
// import SettingsIcon from '@mui/icons-material/Settings';
// import { Add } from "@mui/icons-material";
import Sidebar from "./components/Sidebar"
import Feed from "./components/Feed"
import Rightbar from "./components/Rightbar"
import Navbar from "./components/Navbar"
import {Container} from "@mui/material"
import {Box} from "@mui/material"
import {Stack} from "@mui/material"
function App() {

  // const BlueButton = styled(Button)(({theme})=>({
  //   backgroundColor:'skyblue',
  //   color:"#888", 
  //   margin:5,
  //   "&:hover":{
  //     backgroundColor:"lightblue"},
  //     "&:disabled":{
  //       backgroundColor:"gray",
  //       color:"white",
  //     },
  // }));
  return (   
    // <Container sx={{backgroundColor:"red"}}>
    //   <Sidebar/>
    //   <Feed/>
    //   <Rightbar/>
    // </Container>

    <Box sx={{backgroundColor:""}}>
    <Navbar/>
    <Stack direction="row" spacing={2} justifyContent="space-between">
      <Sidebar/>
      <Feed/>
      <Rightbar/>
    </Stack>
    
  </Box>
  );
}

export default App;
