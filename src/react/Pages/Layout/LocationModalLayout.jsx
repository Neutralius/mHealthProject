import React from 'react'
import PropTypes from 'prop-types'
import { Button, Typography, Stack, Paper } from '@mui/material'

const Modal = ({ onConfirm }) => (
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backdropFilter: 'blur ', // Hintergrund schwammig
      zIndex: 10
    }}
  >
    <Paper
      elevation={3}
      sx={{
        width: '90%',
        maxWidth: '400px',
        padding: 3,
        borderRadius: 2,
        textAlign: 'center',
        backgroundColor: (theme) => theme.palette.background.default
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Standort freigeben
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 3 }}>
        Wollen Sie den Standort freigeben?
      </Typography>
      <Stack direction="row" justifyContent="center" spacing={2}>
        <Button variant="contained" color="primary" onClick={onConfirm}>
          Ja
        </Button>
        <Button variant="outlined">Nein</Button>
      </Stack>
    </Paper>
  </div>
)

Modal.propTypes = {
  onConfirm: PropTypes.func.isRequired
}

const LocationModalLayout = ({ children, showModal, onModalConfirm }) => (
  <div style={{ position: 'relative', width: '100%', height: '100%' }}>
    {showModal && <Modal onConfirm={onModalConfirm} />}
    {children}
  </div>
)

LocationModalLayout.propTypes = {
  children: PropTypes.node.isRequired,
  showModal: PropTypes.bool.isRequired,
  onModalConfirm: PropTypes.func.isRequired
}

export default LocationModalLayout
