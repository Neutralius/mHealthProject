import React from 'react'
import { Container, Stack } from '@mui/material'
import MapWithMarkers from '../../Components/Map'
import DataGridDemo from '../../Components/DataGrid/DataGrid'

const LandingPage = () => (
  <Stack
    direction="column"
    sx={{
      height: '100%',
      width: '100%'
    }}
  >
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        height: '70%',
        width: '100%',
        padding: 2,
        position: 'relative'
      }}
    >
      <MapWithMarkers />
    </Container>

    <Container
      maxWidth={false}
      disableGutters
      sx={{
        height: '30%',
        width: '100%',
        padding: 2,
        position: 'relative'
      }}
    >
      <DataGridDemo />
    </Container>
  </Stack>
)

export default LandingPage
