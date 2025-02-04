import 'leaflet/dist/leaflet.css'
import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import RootRoutes from './Routes/RootRoutes'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)

  const theme = createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: defaultTheme => ({
          html: {
            width: '100%',
            height: '100%'
          },
          body: {
            width: '100%',
            height: '100%',
            background: defaultTheme.palette.grey[darkMode ? 900 : 200]
          },
          '#app': {
            width: '100%',
            height: '100%'
          }
        })
      }
    },
    palette: {
      mode: darkMode ? 'dark' : 'light'
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RootRoutes darkMode={darkMode} setDarkMode={setDarkMode} />
    </ThemeProvider>
  )
}

const container = document.getElementById('app')
const root = createRoot(container)
root.render(<App />)
