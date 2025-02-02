import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import AppLayout from '../Pages/Layout/AppLayout'
import AlternativesPage from '../Pages/AlternativesPage/AlternativesPage'

const RootRoutes = () => (
  <Router>
    <Routes>
      {/* <Route path="/" element={<LocationModalLayout />} /> */}
      <Route path="/" element={<AppLayout />} />
      <Route path="/alternatives" element={<AlternativesPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </Router>
)

export default RootRoutes
