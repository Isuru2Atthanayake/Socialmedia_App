import React from 'react'
import {Box, ListItem, ListItemButton,InboxIcon, ListItemIcon, ListItemText, List, Switch} from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ModeNightIcon from '@mui/icons-material/ModeNight';


const sidebar = ({setMode,mode}) => {
  return (
    <Box bgcolor="" flex={1} padding={2} sx={{display: {xs:"none",sm:"block"}}}>
        <Box position="fixed">
            <List>
              <ListItem disablePadding>
                  <ListItemButton component="a" href="#home">
                    <ListItemIcon>
                      <HomeIcon/>
                    </ListItemIcon>
                  <ListItemText primary="Homepage" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                  <ListItemButton component="a" href="#pages">
                    <ListItemIcon>
                      <ArticleIcon/>
                    </ListItemIcon>
                  <ListItemText primary="Pages" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                  <ListItemButton component="a" href="#Groups">
                    <ListItemIcon>
                      <GroupIcon/>
                    </ListItemIcon>
                  <ListItemText primary="Groups" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                  <ListItemButton component="a" href="#Marcketplace">
                    <ListItemIcon>
                      <StorefrontIcon/>
                    </ListItemIcon>
                  <ListItemText primary="Marcketplace" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                  <ListItemButton component="a" href="#Friends">
                    <ListItemIcon>
                      <PersonIcon/>
                    </ListItemIcon>
                  <ListItemText primary="Friends" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                  <ListItemButton component="a" href="#Settings">
                    <ListItemIcon>
                      <SettingsIcon/>
                    </ListItemIcon>
                  <ListItemText primary="Settings" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                  <ListItemButton component="a" href="#Profile">
                    <ListItemIcon>
                      <AccountBoxIcon/>
                    </ListItemIcon>
                  <ListItemText primary="Profile" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                  <ListItemButton component="a" href="#Marcketplace">
                    <ListItemIcon>
                      <ModeNightIcon/>
                    </ListItemIcon>
                    <Switch onChange={ e=> setMode(mode === "light" ? "dark" : "light")}/> {/* switch button and the condition */}
                </ListItemButton>
              </ListItem>
            </List>
        </Box> 
    </Box>
  )
}

export default sidebar