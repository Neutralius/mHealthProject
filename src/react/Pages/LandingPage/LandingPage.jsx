import React from 'react'

import { Container } from '@mui/material'
import MapWithMarkers from '../../Components/Map'

const LandingPage = () => (
  <Container
    maxWidth={false}
    disableGutters
  >
    <MapWithMarkers />
  </Container>
)

export default LandingPage
