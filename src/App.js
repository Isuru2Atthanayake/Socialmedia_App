import { Button, Typography } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import { Add } from "@mui/icons-material";

function App() {
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button startIcon={<SettingsIcon/>} variant="contained" color="secondary"  size="small">Settings </Button>
      <Button startIcon={<Add/>} variant="contained" color="success" size="small" >Add new</Button>
      <Button variant="outlined"  disabled> Out lined </Button>
      <Typography variant="h1" component="p">It uses</Typography>;

    </div>
  );
}

export default App;
