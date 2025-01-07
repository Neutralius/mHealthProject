import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import AppLayout from '../Pages/Layout/AppLayout'
import LocationModalLayout from '../Pages/Layout/LocationModalLayout.jsx'

const RootRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LocationModalLayout />} />
      <Route path="/app" element={<AppLayout />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </Router>
)

export default RootRoutes
