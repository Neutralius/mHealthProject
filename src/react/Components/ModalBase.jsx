import React from 'react'
import PropTypes from 'prop-types'
import { Modal, Paper } from '@mui/material'

const ModalBase = ({ open, children, onClose, sx }) => (
  <Modal
    open={open}
    onClose={onClose}
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...sx // Ermöglicht flexibles Styling
    }}
  >
    <Paper
      elevation={3}
      sx={{
        width: '90%',
        maxWidth: '400px',
        padding: 3,
        borderRadius: 2,
        textAlign: 'center'
      }}
    >
      {children}
    </Paper>
  </Modal>
)

ModalBase.propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func,
  sx: PropTypes.object // Zusätzliche Stile
}

export default ModalBase
