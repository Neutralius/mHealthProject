import React from 'react'
import { Container } from '@mui/material'
import MapWithMarkers from '../../Components/Map'

const LandingPage = () => (
  <Container
    maxWidth={false}
    disableGutters
    sx={{
      height: '100%',
      width: '100%',
      padding: 2,
      position: 'relative'
    }}
  >
    <MapWithMarkers />
  </Container>
)

export default LandingPage
