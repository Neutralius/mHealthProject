import React from 'react'
import { Container, Grid2 } from '@mui/material'
import medAlternativesData from './medAlternativesData'
import MedAlternativesCard from '../../Components/MedAlternatives/MedAlternativesCard'

// Quelle: https://mui.com/material-ui/react-grid2/
const AlternativesPage = () => (
  <Container maxWidth="" sx={{ py: 4 }}>
    <Grid2 container spacing={3}>
      {medAlternativesData.map((medInfo) => (
        <Grid2 item xs={12} md={6} key={medInfo.id}>
          <MedAlternativesCard
            name={medInfo.name}
            telefon={medInfo.telefon}
            website={medInfo.website}
            erreichbarkeit={medInfo.erreichbarkeit}
            key={medInfo.id}
          />
        </Grid2>
      ))}
    </Grid2>
  </Container>
)

export default AlternativesPage
