const LOCATION_KEY = 'user_location'
const PERMISSION_KEY = 'location_permission'

export const saveLocationToSessionStorage = (location) => {
  sessionStorage.setItem(LOCATION_KEY, JSON.stringify(location))
}

export const savePermissionToSessionStorage = (permission) => {
  sessionStorage.setItem(PERMISSION_KEY, JSON.stringify(permission))
}

export const getPermissionFromSessionStorage = () => {
  const permission = sessionStorage.getItem(PERMISSION_KEY)
  return permission ? JSON.parse(permission) : null
}

export const removeLocationFromSessionStorage = () => {
  sessionStorage.removeItem('location')
}

export const removePermissionFromSessionStorage = () => {
  sessionStorage.removeItem('permission')
}
