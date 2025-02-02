// Quelle: https://mui.com/material-ui/react-card/?srsltid=AfmBOoqrX2VNsWIyi19N83rGjTiBZHjFWMCA_-DdBK0s9yI2Mon9oOPg
// Website Icon: https://mui.com/material-ui/material-icons/?query=Globe
// Phone Icon: https://mui.com/material-ui/material-icons/?query=Phone

import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone'
import LanguageIcon from '@mui/icons-material/Language'
import { Box, Typography, Link } from '@mui/material'
import PropTypes from 'prop-types'

const MedAlternativesCard = ({ name, telefon, website, erreichbarkeit }) => (
  <Box sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 1, boxShadow: 1 }}>
    <Typography variant="h6" sx={{ mb: 2 }}>
      {name}
    </Typography>

    {telefon && (
      <Link
        href={`tel:${telefon}`}
        sx={{
          display: 'flex',
          alignItems: 'center',
          mb: 1.5,
          color: 'primary.main',
          textDecoration: 'none',
          '&:hover': { color: 'primary.dark' }
        }}
      >
        <PhoneIcon sx={{ mr: 1 }} />
        {telefon}
      </Link>
    )}

    <Link
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        display: 'flex',
        alignItems: 'center',
        color: 'text.secondary',
        textDecoration: 'none',
        '&:hover': { color: 'text.primary' }
      }}
    >
      <LanguageIcon sx={{ mr: 1 }} />
      Website
    </Link>

    <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary' }}>
      Erreichbarkeit:
      {' '}
      {erreichbarkeit}
    </Typography>
  </Box>
)

// weil es sonst von ESLint immer missing in props validation-errors gab
MedAlternativesCard.propTypes = {
  name: PropTypes.string.isRequired,
  telefon: PropTypes.string,
  website: PropTypes.string.isRequired,
  erreichbarkeit: PropTypes.string.isRequired
}

export default MedAlternativesCard
