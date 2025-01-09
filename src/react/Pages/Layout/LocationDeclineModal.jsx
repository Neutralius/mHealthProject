import React from 'react'
import PropTypes from 'prop-types'
import { Modal, Paper, Typography } from '@mui/material'
import { Snackbar } from '@mui/base'

const LocationDeclineModal = ({ showModal, onClose }) => (
  <Modal
    open={showModal}
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
        Standort gespeichert!
      </Typography>
      <Snackbar
        open={showModal}
        autoHideDuration={2000}
        onClose={onClose}
        message="Standortfreigabe abgelehnt!"
      />
    </Paper>
  </Modal>
)

LocationDeclineModal.propTypes = {
  showModal: PropTypes.bool.isRequired, // Gibt an, ob das Modal angezeigt werden soll
  onClose: PropTypes.func.isRequired // Funktion zum Schließen des Modals
}

export default LocationDeclineModal
