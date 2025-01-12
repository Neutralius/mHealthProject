const LOCATION_KEY = 'user_location'
const PERMISSION_KEY = 'location_permission'

/**
 * Speichert die Geolocation-Daten im Session Storage
 * @param {{ lat: number, lon: number }} location
 */
export const saveLocationToSessionStorage = (location) => {
  sessionStorage.setItem(LOCATION_KEY, JSON.stringify(location))
}

/**
 * Ruft die Geolocation-Daten aus dem Session Storage ab
 * @returns {any|null}
 */
export const getLocationFromSessionStorage = () => {
  const location = sessionStorage.getItem(LOCATION_KEY)
  return location ? JSON.parse(location) : null
}

/**
 * Speichert die Standortfreigabe-Entscheidung im Session Storage
 * @param {boolean} permission
 */
export const savePermissionToSessionStorage = (permission) => {
  sessionStorage.setItem(PERMISSION_KEY, JSON.stringify(permission))
}

/**
 * Ruft die Standortfreigabe-Entscheidung aus dem Session Storage ab
 * @returns {boolean | null}
 */
export const getPermissionFromSessionStorage = () => {
  const permission = sessionStorage.getItem(PERMISSION_KEY)
  return permission ? JSON.parse(permission) : null
}
