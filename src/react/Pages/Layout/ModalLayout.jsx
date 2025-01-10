import React from 'react'
import PropTypes from 'prop-types'
import { Button, Typography, Stack, Paper } from '@mui/material'

const Modal = ({ onConfirm }) => (
  // Modal mit unscharfem Hintergrund
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Abdunkelung
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backdropFilter: 'blur(8px)' // Unschärfe für den Hintergrund
      // zIndex: 10 // Sicherstellen, dass das Modal im Vordergrund liegt
    }}
  >
    {/* Popup */}
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
      {/* Titel */}
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Standort freigeben
      </Typography>

      {/* Nachricht */}
      <Typography variant="body1" sx={{ marginBottom: 3 }}>
        Wollen Sie den Standort freigeben?
      </Typography>

      {/* Aktionstasten */}
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

const ModalLayout = ({ children, showModal, onModalConfirm }) => (
  <div style={{ width: '100%', height: '100%' }}>
    {/* Modal wird angezeigt, falls showModal aktiv ist */}
    {showModal && <Modal onConfirm={onModalConfirm} />}
    {/* Inhalte der App */}
    {children}
  </div>
)

ModalLayout.propTypes = {
  children: PropTypes.node.isRequired,
  showModal: PropTypes.bool.isRequired,
  onModalConfirm: PropTypes.func.isRequired
}

export default ModalLayout
