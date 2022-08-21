import React from 'react'
import {Box} from "@mui/material"

const sidebar = () => {
  return (
    <Box bgcolor="skyblue" flex={1} padding={2} sx={{display: {xs:"none",sm:"block"}}}>sidebar</Box>
  )
}

export default sidebar