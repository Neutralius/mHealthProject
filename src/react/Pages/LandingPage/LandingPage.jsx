import React from 'react'

import { Container } from '@mui/material'
import MapWithMarkers from '../../Components/Map'

const LandingPage = () => (
    <Container
        maxWidth={false}
        disableGutters
        style={{height: "auto", width: '100%'}}
    >
        <h1>Map:</h1>
        <MapWithMarkers />
    </Container>
)

export default LandingPage
