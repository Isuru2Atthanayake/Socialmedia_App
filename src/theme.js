import { createTheme } from "@mui/material";

export const theme = createTheme({ // can create own shapes and colours inside this 
     palette: { // used for colours in the theme
        primary:{
            main:"#1760a5",
            light:"skyblue"
        },
        secondary:{
            main:'#15c630',
        },
        otherColour:{
            main:"#999"
        }
     }
})