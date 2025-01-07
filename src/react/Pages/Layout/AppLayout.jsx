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
import LocationModalLayout from './LocationModalLayout'
import LocationInfoModal from './LocationInfoModal'

const borderRadius = 6

const AppLayout = () => {
  const [showModal, setShowModal] = useState(true)
  const [location, setLocation] = useState(null)
  const [showLocationInfo, setShowLocationInfo] = useState(false)
  const handleModalConfirm = () => {
    const storedLocation = '52.448818, 13.386068' // sind Koordinaten hilfreich für die Map?
    setLocation(storedLocation)
    setShowModal(false)
    setShowLocationInfo(true)
  }
  const handleCloseLocationInfo = () => {
    setShowLocationInfo(false)
  }
  return (
    <LocationModalLayout showModal={showModal} onModalConfirm={handleModalConfirm}>
      <Stack
        direction="column"
        sx={{
          width: '100vw',
          height: '100vh',
          backgroundColor: (theme) => theme.palette.background.default,
          overflow: 'hidden'
        }}
      >
        <Stack
          direction="row"
          justifyContent="center"
          sx={{
            width: '100%',
            height: '100%',
            paddingTop: theme => theme.spacing(5),
            paddingBottom: theme => theme.spacing(5)
          }}
        >
          <Container
            maxWidth="xs"
            disableGutters
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}
          >
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              marginBottom={2}
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
                Notaufnahmen Berlin
              </Typography>
            </Stack>
            <Paper
              elevation={6}
              sx={{
                flex: '1 1 auto',
                display: 'flex',
                flexDirection: 'column',
                paddingTop: 2,
                paddingRight: 1,
                paddingBottom: 2,
                paddingLeft: 1,
                overflow: 'hidden',
                borderRadius: theme => theme.spacing(borderRadius),
                background: theme => theme.palette.grey[900]
              }}
            >
              <Stack
                flex="1 1 auto"
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{
                  overflow: 'hidden',
                  borderRadius: theme => theme.spacing(borderRadius),
                  background: theme => theme.palette.background.paper
                }}
              >
                <Stack
                  flex="1 1 auto"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Typography variant="h6">
                    hier soll eine Map sein
                  </Typography>
                </Stack>
                <LocationInfoModal
                  open={showLocationInfo}
                  location={location}
                  onClose={handleCloseLocationInfo}
                />
                <BottomNavigation
                  showLabels
                  value={0}
                  sx={{
                    backgroundColor: (theme) => theme.palette.background.paper,
                    borderRadius: 2
                  }}
                >
                  <BottomNavigation
                    showLabels
                    value={0}
                    sx={{ width: '100%' }}
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
                </BottomNavigation>
              </Stack>
            </Paper>
          </Container>
        </Stack>
      </Stack>
    </LocationModalLayout>
  )
}
export default AppLayout
