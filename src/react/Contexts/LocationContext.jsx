import React, { createContext, useState, useContext, useMemo } from 'react'
import PropTypes from 'prop-types'

const LocationContext = createContext()

export const LocationProvider = ({ children }) => {
  const [filteredLocations, setFilteredLocations] = useState([])
  const [userPosition, setUserPosition] = useState({
    position: [52.51634963490139, 13.377652149017736],
    text: 'Berlin Zentrum'
  })
  const [radius, setRadius] = useState(10)

  const value = useMemo(() => ({
    filteredLocations,
    setFilteredLocations,
    userPosition,
    setUserPosition,
    radius,
    setRadius
  }), [filteredLocations, userPosition, radius])

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
