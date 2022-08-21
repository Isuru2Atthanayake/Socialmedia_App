import { Box } from '@mui/material'
import React from 'react'
import Post from './Post';

export default function feed() {
  return (
    <Box bgcolor="" flex={4} padding={2}>
      <Post/>
      <Post/>
      <Post/>
  </Box>
  )
}
