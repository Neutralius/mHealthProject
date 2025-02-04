import React from 'react'
import PropTypes from 'prop-types'
import { Container, Grid2 } from '@mui/material'
import medAlternativesData from './medAlternativesData'
import MedAlternativesCard from '../../Components/MedAlternatives/MedAlternativesCard'

// Quelle: https://mui.com/material-ui/react-grid2/
const AlternativesPage = ({ darkMode }) => {
  console.log('Dark Mode: ', darkMode)
  return (
    <Container
      maxWidth=""
      sx={{
        py: 4,
        bgcolor: theme => (darkMode ? theme.palette.grey[900] : theme.palette.grey[200])
      }}
    >
      <Grid2 container spacing={3}>
        {medAlternativesData.map((medInfo) => (
          <Grid2 item xs={12} md={6} key={medInfo.id}>
            <MedAlternativesCard
              name={medInfo.name}
              telefon={medInfo.telefon}
              website={medInfo.website}
              erreichbarkeit={medInfo.erreichbarkeit}
            />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  )
}

AlternativesPage.propTypes = {
  darkMode: PropTypes.bool.isRequired
}

export default AlternativesPage
