import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'
import img1 from '../images/girl.png';
import img2 from '../images/girl.jpg';
import img3 from '../images/girl3.jpg';
import img4 from '../images/girl4.jpg';
import img5 from '../images/girl5.jpg';
import pic1 from '../images/food1.jpg';
import pic2 from '../images/food2.jpg';
import pic3 from '../images/food3.jpg';
import pic4 from '../images/food4.jpg';
import pic5 from '../images/food7.jpg';
import pic6 from '../images/food6.jpg'

const rightbar = () => {
  return (
    <Box bgcolor="" flex={2} padding={2} sx={{display: {xs:"none",sm:"block"}}}>
      <Box position="fixed" width={400}>
        <Typography variant="h6" fontWeight={100}>Online Friends</Typography>
          <AvatarGroup max={5}>
              <Avatar alt="Remy Sharp" src={img2} />
              <Avatar alt="Travis Howard" src={img1} />
              <Avatar alt="Cindy Baker" src={img3} />
              <Avatar alt="Agnes Walker" src={img4}/>
              <Avatar alt="Trevor Henderson" src={img5} />
              <Avatar alt="Travis Howard" src={img1} />
          </AvatarGroup>
          
          <div>
          <Typography variant="h6" mt={2} mb={2} fontWeight={100}>
            Latest Photos
          </Typography>
          <ImageList cols={3} rowHeight={200} gap={8}>
              <ImageListItem>
                  <img
                  src={pic1}
                  alt="This is an image"
                  />
              </ImageListItem>
              <ImageListItem>
                  <img
                  src={pic2}
                  alt="This is an image"
                  />
              </ImageListItem>
              <ImageListItem>
                  <img
                  src={pic3}
                  alt="This is an image"
                  />
              </ImageListItem>
              {/* <ImageListItem>
                  <img
                  src={pic4}
                  alt="This is an image"
                  />
              </ImageListItem>
              <ImageListItem>
                  <img
                  src={pic6}
                  alt="This is an image"
                  />
              </ImageListItem>
              <ImageListItem>
                  <img
                  src={pic5}
                  alt="This is an image"
                  />
              </ImageListItem> */}
          </ImageList>
          </div>
          <Typography variant="h6" mt={2}  fontWeight={100}>
            Latest conversations
          </Typography>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={img1} />
                </ListItemAvatar>
                <ListItemText
                  primary="Brunch this weekend?"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Ali Connors
                      </Typography>
                      {" — I'll be in your neighborhood doing errands this…"}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Travis Howard" src={img3} />
                </ListItemAvatar>
                <ListItemText
                  primary="Summer BBQ"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        to Scott, Alex, Jennifer
                      </Typography>
                      {" — Wish I could come, but I'm out of town this…"}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Cindy Baker" src={img5} />
                </ListItemAvatar>
                <ListItemText
                  primary="Oui Oui"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Sandra Adams
                      </Typography>
                      {' — Do you have Paris recommendations? Have you ever…'}
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
      </Box>
    </Box>
  )
}

export default rightbar