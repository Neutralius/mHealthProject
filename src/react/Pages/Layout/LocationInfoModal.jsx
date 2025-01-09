import React from 'react'
import PropTypes from 'prop-types'
import { Modal, Paper, Typography } from '@mui/material'
import { Snackbar } from '@mui/base'

const LocationInfoModal = ({ showModal,
  onClose }) => (
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
          message="Standort gespeichert!"
        />
      </Paper>
    </Modal>
)

LocationInfoModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}
export default LocationInfoModal
