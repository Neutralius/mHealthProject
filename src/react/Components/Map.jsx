import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { filterLocationsByRadius } from './Distanzmesser'
import 'leaflet.awesome-markers/dist/leaflet.awesome-markers.css'
import 'leaflet.awesome-markers/dist/leaflet.awesome-markers.js'
import listeKrankenhaeuser from '../../data/listeKrankenhaeuser.js'
import {Link} from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone'
import EmergencyIcon from '@mui/icons-material/Emergency';

// Fix für fehlende Standard-Icons; Bilder werden bei modernen Projekten oft verschoben, daher wird der Standard-Pfad
// gelöscht und die Marker-Icon-Suche dynamisiert
delete L.Icon.Default.prototype._getIconUrl

// stellt sicher, dass Leaflet die Marker-Icons unabhängig von der Projektstruktur lädt
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'), // für hochauflösende Bildschirme
  iconUrl: require('leaflet/dist/images/marker-icon.png'), // Standard-Marker-Icon
  shadowUrl: require('leaflet/dist/images/marker-shadow.png') // Schattenbild des Markers
})

const MapWithMarkersAndRadius = () => {
  const [userPosition, setUserPosition] = useState({
    position: [52.51634963490139, 13.377652149017736],
    text: 'Berlin Zentrum' // Falls kein Standort freigegeben wurde!
  })



  const [filteredLocations, setFilteredLocations] = useState([])
  const [radius, setRadius] = useState(10)
  const [loading, setLoading] = useState(true) // Weil sonst die Karte gebaut wird bevor der Standort erfasst wird (dadurch nicht zentriert!)

  const redMarkerIcon = L.divIcon({
    className: 'custom-marker', // Definiere CSS-Klassen
    html: '<div style="background-color:red; width:20px; height:20px; border-radius:50%;"></div>',
    iconSize: [15, 15] // Größe des Icons
  })

  const navigate = useNavigate();

  // Filtere die Locations basierend auf dem Radius
  useEffect(() => {
    const filtered = filterLocationsByRadius(userPosition.position, listeKrankenhaeuser, radius)
    setFilteredLocations(filtered)
  }, [userPosition.position, radius])

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setUserPosition({ position: [latitude, longitude], text: 'aktuelle Position' })
          setLoading(false) // Standort wurde freigegeben
        },
        (error) => {
          console.error('Fehler beim Abrufen der Position: ', error)
          setLoading(false) // Ladezustand beenden -> keine Standort-Freigabe o. Error
        }
      )
    }
  }, [])

  // Handler zum Setzen des Radius
  const handleRadiusChange = (newRadius) => {
    setRadius(newRadius)
  }
  if (loading) {
    return <div>Loading...</div> // Ladeanzeige, wenn Position noch nicht ermittelt
  }
  return (
    <div style={{ height: '100%', width: '100%', overflow: 'hidden', zIndex: 1 }}>
      <MapContainer style={{ height: '100%', width: '100%' }} center={userPosition.position} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {filteredLocations.map((location, index) => (
          <Marker key={index} position={location.position}>
            <Popup>
              <p>
                Name:
                {location.Name}
              </p>
              <p>
                Adresse:
                {location.address}
              </p>
              <Link href={`anrufen: ${location.tele}`}>
                <PhoneIcon sx={{ mr: 1 }} />
                {location.tele}
              </Link>
              <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault(); // Verhindert die Standard-Aktion des Links
                    navigate('/alternatives'); // Navigiert zur Alternativen-Seite
                  }}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    textDecoration: 'none',
                    color: '#007BFF',
                    fontWeight: 'normal',
                    '&:hover': {
                      textDecoration: 'underline', // Textdekoration bei Hover
                    },
                  }}
              >
                <EmergencyIcon sx={{ mr: 1 }} />
                Alternativen
              </Link>

            </Popup>
          </Marker>
        ))}
        <Marker icon={redMarkerIcon} position={userPosition.position}>
          <Popup>{userPosition.text}</Popup>
        </Marker>
      </MapContainer>
      <div style={buttonContainerStyle}>
        <button
          onClick={() => handleRadiusChange(5)}
          style={radius === 5 ? activeButtonStyle : buttonStyle}
        >
          5 km
        </button>
        <button
          onClick={() => handleRadiusChange(10)}
          style={radius === 10 ? activeButtonStyle : buttonStyle}
        >
          10 km
        </button>
        <button
          onClick={() => handleRadiusChange(15)}
          style={radius === 15 ? activeButtonStyle : buttonStyle}
        >
          15 km
        </button>
      </div>
    </div>
  )
}

// CSS-Stile für die Buttons
const buttonContainerStyle = {
  position: 'absolute',
  bottom: '20px',
  left: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  zIndex: 1000
}

const buttonStyle = {
  padding: '10px 15px',
  backgroundColor: '#007BFF',
  color: '#fff',
  border: '2px solid #007BFF',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '12px'
}

const activeButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#fff',
  color: '#007BFF',
  border: '2px solid #007BFF'
}

export default MapWithMarkersAndRadius