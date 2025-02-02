import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Button, Typography, Stack, Snackbar, Alert } from '@mui/material'
import ModalBase from '../../Components/ModalBase'
import {
  saveLocationToSessionStorage,
  savePermissionToSessionStorage,
  getPermissionFromSessionStorage, removeLocationFromSessionStorage, removePermissionFromSessionStorage

} from '../../../utils/SessionStorageUtils'

const GEOLOCATION_OPTIONS = {
  enableHighAccuracy: true,
  timeout: 20000,
  maximumAge: 5
}

const ERROR_MESSAGES = {
  POSITION_UNAVAILABLE: 'Standortinformationen sind nicht verfügbar.',
  TIMEOUT: 'Die Standortabfrage ist abgelaufen.',
  DEFAULT: 'Ein unbekannter Fehler ist aufgetreten.',
  UNSUPPORTED: 'Bitte geben Sie Ihren Standort zuerst in den Einstellungen des Browsers frei.'
}

const LocationModalLayout = ({ open, onConfirm, onDecline }) => {
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'error' })
  const [storedPermission, setStoredPermission] = useState(false)

  const closeSnackbar = () => setSnackbar({ ...snackbar, open: false })

  const geolocate = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords

          const location = { lat: latitude, lon: longitude }
          saveLocationToSessionStorage(location)
          savePermissionToSessionStorage(true)
          setSnackbar({
            open: true,
            message: 'Standort erfolgreich gespeichert!',
            severity: 'success'
          })
          onConfirm(location)
        },
        (error) => {
          const errorMessage = ERROR_MESSAGES[error.code] || ERROR_MESSAGES.UNSUPPORTED
          setSnackbar({
            open: true,
            message: errorMessage,
            severity: 'error'
          })
        },
        GEOLOCATION_OPTIONS
      )
    } else {
      setSnackbar({
        open: true,
        message: ERROR_MESSAGES.UNSUPPORTED,
        severity: 'error'
      })
    }
  }

  useEffect(() => {
    const permissionGranted = getPermissionFromSessionStorage() === true
    setStoredPermission(permissionGranted)
    if (permissionGranted && open) {
      geolocate()
    } else if (open) {
      setSnackbar({
        open: true,
        message: 'Bitte geben Sie die Standortfreigabe in den Browser-Einstellungen an.',
        severity: 'info'
      })
    }
  }, [open])

  // löscht Zustimmung - wichtig falls User im Browser nur einmalige Zustimmung gegeben hat
  const declinePermission = () => {
    removeLocationFromSessionStorage()
    removePermissionFromSessionStorage()

    // Setze den Status auf abgelehnt und rufe den `onDecline`-Callback auf
    setSnackbar({
      open: true,
      message: 'Standortfreigabe abgelehnt.',
      severity: 'warning'
    })
    onDecline()
  }

  if (storedPermission) return null

  return (
    <>
      <ModalBase open={open} onClose={declinePermission}>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Standort freigeben
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 3 }}>
          Möchten Sie Ihren Standort freigeben?
        </Typography>
        <Stack direction="row" justifyContent="center" spacing={2}>
          <Button variant="text" color="success" onClick={geolocate}>
            Ja
          </Button>
          <Button variant="text" color="error" onClick={declinePermission}>
            Nein
          </Button>
        </Stack>
      </ModalBase>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={closeSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={closeSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
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
