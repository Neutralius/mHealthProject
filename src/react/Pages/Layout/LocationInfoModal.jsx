import React from 'react'
import PropTypes from 'prop-types'
import { Modal, Paper, Typography, Button } from '@mui/material'

const LocationInfoModal = ({ open, location, onClose }) => (
  <Modal
    open={open}
    onClose={onClose}
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <Paper
      elevation={3}
      sx={{
        width: '90%',
        maxWidth: '300px',
        padding: 3,
        borderRadius: 2,
        textAlign: 'center'
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Standort gespeichert
      </Typography>
      <Typography variant="body2">{location}</Typography>
      <Button
        variant="contained"
        onClick={onClose}
        sx={{ marginTop: 3 }}
      >
        OK
      </Button>
    </Paper>
  </Modal>
)

LocationInfoModal.propTypes = {
  open: PropTypes.bool.isRequired, // Gibt an, ob das Modal angezeigt werden soll
  location: PropTypes.string, // Der gespeicherte Standort
  onClose: PropTypes.func.isRequired // Funktion zum Schließen des Modals
}

LocationInfoModal.defaultProps = {
  location: '' // Default-Wert, falls kein Standort übergeben wird
}

export default LocationInfoModal
