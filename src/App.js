// import { Button, styled, Typography } from "@mui/material";
// import SettingsIcon from '@mui/icons-material/Settings';
// import { Add } from "@mui/icons-material";
import Sidebar from "./components/Sidebar"
import Feed from "./components/Feed"
import Rightbar from "./components/Rightbar"
import Navbar from "./components/Navbar"
import {Container, createTheme, ThemeProvider} from "@mui/material"
import {Box} from "@mui/material"
import {Stack} from "@mui/material"
import Addpost from "./components/Add"
import { useState } from "react"

function App() {
  const [mode,setMode,] = useState("light");

  const darkTheme = createTheme({
    palette:{
      mode: mode,
    },
  });


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
  <ThemeProvider  theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar/>
        <Stack direction="row" spacing={2} justifyContent="space-between">
            <Sidebar setMode={setMode} mode={mode}/>
              <Feed/>
            <Rightbar/>
        </Stack>
        <Addpost/>
      </Box>
  </ThemeProvider>
    
  );
}

export default App;
