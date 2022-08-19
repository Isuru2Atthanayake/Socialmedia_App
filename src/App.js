import { Button, styled, Typography } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import { Add } from "@mui/icons-material";

function App() {

  const BlueButton = styled(Button)({
    backgroundColor:"skyblue",
    color:"#888", 
    margin:5,
    "&:hover":{
      backgroundColor:"lightblue"},
      "&:disabled":{
        backgroundColor:"gray",
        color:"white",
      },
  });
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button startIcon={<SettingsIcon/>} variant="contained" color="secondary"  size="small">Settings </Button>
      <Button startIcon={<Add/>} variant="contained" color="success" size="small" >Add new</Button>
      <Button variant="outlined"  disabled> Out lined </Button>
      <Typography variant="h1" component="p">It uses h1 style but its a p tag</Typography>
      <BlueButton>My button</BlueButton>
      <BlueButton>another button</BlueButton>
    </div>
  );
}

export default App;
