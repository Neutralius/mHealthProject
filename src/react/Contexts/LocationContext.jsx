import React, { createContext, useState, useContext, useMemo } from 'react'
import PropTypes from 'prop-types'

const LocationContext = createContext()

export const LocationProvider = ({ children }) => {
  // State für gefilterte Krankenhäuser basierend auf Radius und Position
  const [filteredLocations, setFilteredLocations] = useState([])
  // Standardposition: Berlin Zentrum
  const [userPosition, setUserPosition] = useState({
    position: [52.51634963490139, 13.377652149017736],
    text: 'Berlin Zentrum'
  })
  const [radius, setRadius] = useState(10)

  // Werte werden nur neu berechnet,
  // wenn sich filteredLocations, userPosition oder radius ändern
  const value = useMemo(() => ({
    filteredLocations,
    setFilteredLocations,
    userPosition,
    setUserPosition,
    radius,
    setRadius
  }), [filteredLocations, userPosition, radius])

  // Stellt den Context allen child components zur Verfügung
  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  )
}

LocationProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export const useLocation = () => useContext(LocationContext)
