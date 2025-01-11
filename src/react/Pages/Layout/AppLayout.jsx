import React, { useState } from 'react'
import {
  Stack,
  Container,
  Typography,
  Paper
} from '@mui/material'

import AppLogo from '../../../assets/favicon.svg'
import LocationModalLayout from './LocationModalLayout'
import LocationInfoModal from './LocationInfoModal'
import LocationDeclineModal from './LocationDeclineModal'

const AppLayout = () => {
  const borderRadius = 6

  const [showModal, setShowModal] = useState(true)
  const [location, setLocation] = useState(null)
  const [showLocationInfo, setShowLocationInfo] = useState(false)
  const [showLocationDecline, setShowDeclineModal] = useState(false)

  const handleModalConfirm = () => {
    const storedLocation = '52.448818, 13.386068' // Koordinaten für die Map
    setLocation(storedLocation) // Koordinaten setzen
    setShowModal(false) // Haupt-Modal schließen
    setShowLocationInfo(true) // Info-Modal öffnen
  }

  const handleModalDecline = () => {
    setShowModal(false) // Haupt-Modal schließen
    setShowDeclineModal(true) // Nein-Modal öffnen
  }

  const handleCloseLocationInfo = () => {
    setShowLocationInfo(false) // Zustimmungs-Modal schließen
  }

  const handleCloseDeclineModal = () => {
    setShowDeclineModal(false) // Ablehnungs-Modal schließen
  }

  return (
    <>
      {/* Hauptaktions-Modal */}
      <LocationModalLayout
        open={showModal}
        onConfirm={handleModalConfirm}
        onDecline={handleModalDecline}
      />

      {/* Info-Modal */}
      <LocationInfoModal
        showModal={showLocationInfo}
        location={location}
        onClose={handleCloseLocationInfo}
      />

      {/* Ablehnungs-Modal */}
      <LocationDeclineModal
        showModal={showLocationDecline}
        onClose={handleCloseDeclineModal}
      />

      <Stack
        direction="row"
        justifyContent="center"
        sx={{
          width: '100%',
          height: '100%',
          paddingTop: (theme) => theme.spacing(5),
          paddingBottom: (theme) => theme.spacing(5)
        }}
      >
        <Container
          maxWidth="sm"
          disableGutters
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
          }}
        >
          {/* Header mit Logo */}
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            marginBottom={2}
          >
            <img
              src={AppLogo}
              alt="AppLogo"
              style={{
                width: '50px',
                height: '50px',
                marginRight: '16px'
              }}
            />
            <Typography variant="h5" fontWeight="bold">
              Notaufnahmen Berlin
            </Typography>
          </Stack>

          {/* Inhalt (z. B. eine Map später einfügen) */}
          <Paper
            elevation={6}
            sx={{
              flex: '1 1 auto',
              display: 'flex',
              flexDirection: 'column',
              paddingTop: 2,
              paddingRight: 1,
              paddingBottom: 2,
              paddingLeft: 1,
              overflow: 'hidden',
              borderRadius: (theme) => theme.spacing(borderRadius),
              background: (theme) => theme.palette.grey[900]
            }}
          >
            <Stack
              flex="1 1 auto"
              direction="column"
              justifyContent="center"
              alignItems="center"
              sx={{
                overflow: 'hidden',
                borderRadius: (theme) => theme.spacing(borderRadius),
                background: (theme) => theme.palette.background.paper
              }}
            >
              <Typography variant="h6">hier soll eine Map sein</Typography>
            </Stack>
          </Paper>
        </Container>
      </Stack>
    </>
  )
}

export default AppLayout
