import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Snackbar, Alert } from '@mui/material'
import {
  saveLocationToSessionStorage,
  savePermissionToSessionStorage,
  getPermissionFromSessionStorage,
  removeLocationFromSessionStorage,
  removePermissionFromSessionStorage
} from '../../../utils/SessionStorageUtils'

const GEOLOCATION_OPTIONS = {
  enableHighAccuracy: true,
  timeout: 20000,
  maximumAge: 5
}

const ERROR_MESSAGES = {
  1: 'Standortzugriff wurde verweigert. Bitte ändern Sie die Browser-Einstellungen.',
  2: 'Standortinformationen sind nicht verfügbar.',
  3: 'Die Standortabfrage ist abgelaufen.',
  DEFAULT: 'Ein unbekannter Fehler ist aufgetreten.',
}

const LocationManager = ({ onLocationUpdate }) => {
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'info' })

  const closeSnackbar = () => setSnackbar({ ...snackbar, open: false })

  const requestLocation = () => {
    if (!navigator.geolocation) {
      setSnackbar({ open: true, message: ERROR_MESSAGES.DEFAULT, severity: 'error' })
      return
    }

    navigator.permissions.query({ name: 'geolocation' }).then((result) => {
      if (result.state === 'granted') {
        getLocation(true) // Standort holen & speichern
      } else if (result.state === 'prompt') {
        getLocation(false) // Nutzer entscheidet noch → keine Speicherung
      } else {
        handleLocationDenied()
      }
    })
  }

  const getLocation = (saveToStorage) => {
    navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          const location = { lat: latitude, lon: longitude }

          if (saveToStorage) {
            saveLocationToSessionStorage(location)
            savePermissionToSessionStorage(true)
          }

          setSnackbar({ open: true, message: 'Standort erfolgreich abgerufen!', severity: 'success' })
          onLocationUpdate(location) // Standort an die App weitergeben
        },
        (error) => {
          setSnackbar({ open: true, message: ERROR_MESSAGES[error.code] || ERROR_MESSAGES.DEFAULT, severity: 'error' })
          handleLocationDenied()
        },
        GEOLOCATION_OPTIONS
    )
  }

  const handleLocationDenied = () => {
    removeLocationFromSessionStorage()
    removePermissionFromSessionStorage()
    setSnackbar({ open: true, message: 'Standortzugriff verweigert. Daten wurden entfernt.', severity: 'warning' })
    onLocationUpdate(null) // Leere Location zurückgeben
  }

  useEffect(() => {
    const storedPermission = getPermissionFromSessionStorage()

    if (storedPermission) {
      requestLocation()
    }
  }, [])

  return (
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
  )
}

LocationManager.propTypes = {
  onLocationUpdate: PropTypes.func.isRequired
}

export default LocationManager


