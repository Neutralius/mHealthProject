import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import AppLayout from '../Pages/Layout/AppLayout'
import AlternativesPage from '../Pages/AlternativesPage/AlternativesPage.jsx'

const RootRoutes = ({ darkMode, setDarkMode }) => (
  <Router>
    <Routes>
      {/* <Route path="/" element={<LocationModalLayout />} /> */}
      <Route path="/" element={<AppLayout darkMode={darkMode} setDarkMode={setDarkMode} />} />
      <Route path="/alternatives" element={<AlternativesPage darkMode={darkMode} />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </Router>
)

RootRoutes.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired
}

export default RootRoutes
