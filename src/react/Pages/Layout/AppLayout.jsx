import React, { useState } from 'react'
import {
  Stack,
  Container,
  Typography,
  Paper,
  Snackbar,
  Alert
} from '@mui/material'

import AppLogo from '../../../assets/favicon.svg'
import LocationModalLayout from './LocationModalLayout'
import MapWithMarkers from '../../Components/Map.jsx'
import DataGridDemo from '../../Components/DataGrid/DataGrid.jsx'

const AppLayout = () => {
  const borderRadius = 6

  const [showModal, setShowModal] = useState(true)

  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'info' })

  const handleModalConfirm = () => {
    setShowModal(false) // Haupt-Modal schließen
    setSnackbar({ open: true, message: 'Standort erfolgreich gespeichert!', severity: 'success' })
  }

  const handleModalDecline = () => {
    setShowModal(false)
    setSnackbar({ open: true, message: 'Standortfreigabe abgelehnt!', severity: 'warning' })
  }

  return (
    <>
      <LocationModalLayout
        open={showModal}
        onConfirm={handleModalConfirm}
        onDecline={handleModalDecline}
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
            height: '100%',
            position: 'relative'
          }}
        >
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
          </Paper>
        </Container>

      </Stack>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  )
}

export default AppLayout
