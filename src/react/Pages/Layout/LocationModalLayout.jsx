import { useEffect } from 'react'
import {
  saveLocationToSessionStorage,
  savePermissionToSessionStorage,
  getLocationFromSessionStorage,
  removeLocationFromSessionStorage,
  removePermissionFromSessionStorage
} from '../../../Utils/SessionStorageUtils'

const GEOLOCATION_OPTIONS = {
  enableHighAccuracy: true,
  timeout: 1000,
  maximumAge: 0
}

const LocationManager = () => {
  const requestLocation = () => {
    const storedLocation = getLocationFromSessionStorage()
    if (storedLocation) {
    } else {
      getLocation(true)
    }
  }

  const getLocation = (saveToStorage) => {
    if (!navigator.geolocation) {
      return
    }

    navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          const location = { lat: latitude, lon: longitude }

          if (saveToStorage) {
            saveLocationToSessionStorage(location)
            savePermissionToSessionStorage(true)
          }
        },
        () => handleLocationDenied(),
        GEOLOCATION_OPTIONS
    )
  }


  const handleLocationDenied = () => {
    removeLocationFromSessionStorage()
    removePermissionFromSessionStorage()
  }

  useEffect(() => {
    requestLocation()
  }, []) //  Wird nur einmal beim Laden ausgeführt

  return null
}

export default LocationManager


