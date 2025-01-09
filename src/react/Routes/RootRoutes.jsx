import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import AppLayout from '../Pages/Layout/AppLayout'
import LocationModalLayout from '../Pages/Layout/LocationModalLayout'

const RootRoutes = () => {
  const [showModal, setShowModal] = useState(true)

  const handleModalConfirm = () => {
    setShowModal(false)
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<LocationModalLayout
            showModal={showModal}
            onModalConfirm={handleModalConfirm}
          />}
        />
        <Route path="/app" element={<AppLayout />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default RootRoutes
