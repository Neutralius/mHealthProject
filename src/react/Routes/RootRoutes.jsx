import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import AppLayout from '../Pages/Layout/AppLayout'

const RootRoutes = () => (
  <Router>
    <Routes>
      <Route path="/app" element={<AppLayout />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </Router>
)

export default RootRoutes
