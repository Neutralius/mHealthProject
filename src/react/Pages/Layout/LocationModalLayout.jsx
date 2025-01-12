import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Typography, Stack, Snackbar, Alert } from '@mui/material'
import ModalBase from '../../Components/ModalBase'
import { saveLocationToSessionStorage, savePermissionToSessionStorage } from '../../../Utils/SessionStorageUtils'

const LocationModalLayout = ({ open, onConfirm, onDecline }) => {
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'error' })

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false })
  }

  const handleConfirm = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          console.log('Standort erfolgreich abgerufen:', { latitude, longitude })
          savePermissionToSessionStorage(true)
          saveLocationToSessionStorage({ lat: latitude, lon: longitude })
          onConfirm({ lat: latitude, lon: longitude })
        },
        (error) => {
          console.error('Geolocation Fehler:', error)
          let errorMessage
          switch (error.code) {
            case error.PERMISSION_DENIED:
              errorMessage = 'Standortfreigabe wurde abgelehnt.'
              break
            case error.POSITION_UNAVAILABLE:
              errorMessage = 'Standortinformationen sind nicht verfügbar.'
              break
            case error.TIMEOUT:
              errorMessage = 'Die Standortabfrage ist abgelaufen.'
              break
            default:
              errorMessage = 'Ein unbekannter Fehler ist aufgetreten.'
          }
          setSnackbar({ open: true, message: errorMessage, severity: 'error' })
        },
        {
          enableHighAccuracy: true, // Genauigkeit verbessern
          timeout: 10000 // 10 Sekunden Timeout
        }
      )
    } else {
      setSnackbar({
        open: true,
        message: 'Geolocation wird von diesem Browser nicht unterstützt.',
        severity: 'error'
      })
    }
  }

  const handleDecline = () => {
    savePermissionToSessionStorage(false)
    onDecline()
  }

  return (
    <>
      <ModalBase open={open} onClose={handleDecline}>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Standort freigeben
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 3 }}>
          Möchten Sie Ihren Standort freigeben?
        </Typography>
        <Stack direction="row" justifyContent="center" spacing={2}>
          <Button variant="text" color="success" onClick={handleConfirm}>
            Ja
          </Button>
          <Button variant="text" color="error" onClick={handleDecline}>
            Nein
          </Button>
        </Stack>
      </ModalBase>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  )
}

LocationModalLayout.propTypes = {
  open: PropTypes.bool.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onDecline: PropTypes.func.isRequired
}

export default LocationModalLayout
