import React from 'react'

import { Container } from '@mui/material'
import MapWithMarkers from '../../Components/Map'

const LandingPage = () => (
  <Container
    maxWidth={false}
    disableGutters
    style={{ height: '100%', width: '100%' }}
  >
    <MapWithMarkers />
  </Container>
)

export default LandingPage
