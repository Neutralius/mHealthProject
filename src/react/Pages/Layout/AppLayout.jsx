import React, { useState } from 'react'
import {
  Stack,
  Container,
  Typography,
  Paper,
  BottomNavigation,
  BottomNavigationAction
} from '@mui/material'
import {
  Restore as RestoreIcon,
  Favorite as FavoriteIcon,
  Person as ProfileIcon
} from '@mui/icons-material'

import AppLogo from '../../../assets/favicon.svg'
import ModalLayout from './ModalLayout'
import LandingPage from '../LandingPage/LandingPage'

const borderRadius = 6

const AppLayout = () => {
  const [showModal, setShowModal] = useState(true)

  const handleModalConfirm = () => {
    setShowModal(false)
  }

  return (
    <ModalLayout showModal={showModal} onModalConfirm={handleModalConfirm}>
      <Stack
        direction="column"
        sx={{
          width: '100vw',
          height: '100vh',
          backgroundColor: (theme) => theme.palette.background.default,
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <Container
          maxWidth="xs"
          disableGutters
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '75%',
            position: 'relative'
          }}
        >
          {/* Header */}
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            marginBottom={2}
            sx={{
              padding: 2
            }}
          >
            <img
              src={AppLogo}
              alt="AppLogo"
              style={{
                width: '50px',
                height: '50px',
                marginRight: '16px'
              }}
            />
            <Typography variant="h5" fontWeight="bold">
              Auslastung Notaufnahmen Berlin
            </Typography>
          </Stack>

          <Paper
            elevation={6}
            sx={{
              flex: '1 1 auto',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              borderRadius: theme => theme.spacing(borderRadius),
              background: theme => theme.palette.grey[900],
              position: 'relative',
              zIndex: 1
            }}
          >
            <Stack
              flex={1}
              sx={{
                overflow: 'hidden',
                borderRadius: theme => theme.spacing(borderRadius),
                background: theme => theme.palette.background.paper,
                position: 'relative'
              }}
            >
              <LandingPage />
            </Stack>
            <BottomNavigation
              showLabels
              value={0}
              sx={{
                backgroundColor: (theme) => theme.palette.background.paper,
                borderRadius: 2,
                position: 'relative',
                zIndex: 2
              }}
            >
              <BottomNavigationAction
                label="Recents"
                icon={<RestoreIcon />}
              />
              <BottomNavigationAction
                label="Favorites"
                icon={<FavoriteIcon />}
              />
              <BottomNavigationAction
                label="Profile"
                icon={<ProfileIcon />}
              />
            </BottomNavigation>
          </Paper>
        </Container>
      </Stack>
    </ModalLayout>
  )
}
export default AppLayout
