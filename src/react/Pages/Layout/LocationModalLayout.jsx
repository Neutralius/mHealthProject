import React from 'react'
import PropTypes from 'prop-types'
import { Button, Typography, Stack } from '@mui/material'
import ModalBase from '../../Components/ModalBase'

const LocationModalLayout = ({ open, onConfirm, onDecline }) => (
  <ModalBase open={open} onClose={onDecline}>
    <Typography variant="h6" sx={{ marginBottom: 2 }}>
      Standort freigeben
    </Typography>
    <Typography variant="body1" sx={{ marginBottom: 3 }}>
      Wollen Sie den Standort freigeben?
    </Typography>
    <Stack direction="row" justifyContent="center" spacing={2}>
      <Button variant="text" color="success" onClick={onConfirm}>
        Ja
      </Button>
      <Button variant="text" color="error" onClick={onDecline}>
        Nein
      </Button>
    </Stack>
  </ModalBase>
)

LocationModalLayout.propTypes = {
  open: PropTypes.bool.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onDecline: PropTypes.func.isRequired
}

export default LocationModalLayout
