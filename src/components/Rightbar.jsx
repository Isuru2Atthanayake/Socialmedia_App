import { Avatar, AvatarGroup, Box, Typography } from '@mui/material'
import React from 'react'

const rightbar = () => {
  return (
    <Box bgcolor="" flex={2} padding={2} sx={{display: {xs:"none",sm:"block"}}}>
      <Box position="fixed">
        <Typography variant="h6" fontWeight={100}>Online Friends</Typography>
          <AvatarGroup max={4}>
              <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" />
              <Avatar alt="Travis Howard" src="https://images.unsplash.com/photos/9i7aZ49g438" />
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
              <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          </AvatarGroup>
      </Box>
    </Box>
  )
}

export default rightbar