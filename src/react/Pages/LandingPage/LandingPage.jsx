import React from 'react'
import { Box, Typography } from '@mui/material'

const LandingPage = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', // Höhe des Viewports
      backgroundColor: '#EA4A4A', // Roter Hintergrund
      textAlign: 'center'
    }}
  >
    <Typography variant="h3" color="white">
      Auslastung Notaufnahmen Berlin
    </Typography>
  </Box>
)

export default LandingPage
