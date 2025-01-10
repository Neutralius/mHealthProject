import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { filterLocationsByRadius } from './Distanzmesser.jsx'

// Fix für fehlende Standard-Icons
delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

const MapWithMarkersAndRadius = () => {
  const [userPosition] = useState({
    position: [52.51634963490139, 13.377652149017736],
    text: 'dein Standort'
  })
  const [filteredLocations, setFilteredLocations] = useState([])
  const [radius, setRadius] = useState(10)

    const locations = [
        { position: [52.52474739747537, 13.44001889248633], text: 'Vivantes Klinikum im Friedrichshain' },
        { position: [52.49418037564013, 13.40874535753571], text: 'Vivantes Klinikum am Urban' },
        { position: [52.43847783989801, 13.458062784102816], text: 'Vivantes Klinikum Neukölln' },
        { position: [52.46162097791152, 13.346515898211988], text: 'Vivantes Auguste-Viktoria-Klinikum' },
        { position: [52.54979097205315, 13.205673798014406], text: 'Vivantes Klinikum Spandau' },
        { position: [52.58987465043478, 13.309370415667551], text: 'Vivantes Humboldt-Klinikum' },
        { position: [52.52666827285003, 13.376732312936047], text: "Charité Campus Mitte"},
        { position: [52.4415454118761, 13.320392312931736], text: "Charité Campus Benjamin Franklin" },
        { position: [52.54263762216729, 13.340682822125144], text: "Charité Campus Virchow-Klinikum" },
        { position: [52.52661305604474, 13.397802397594635], text: "St. Hedwig-Krankenhaus" },
        { position: [52.520131627784224, 13.27738121184456], text: "DRK Kliniken Berlin Westend" },
        { position: [52.519146299745906, 13.567314424582012], text: "Unfallkrankenhaus Berlin" },
        { position: [52.555325126002614, 13.370260326431449], text: "Jüdisches Krankenhaus Berlin" },
        { position: [52.4325046333451, 13.325988539919024], text: "Krankenhaus Bethel Berlin" },
        { position: [52.63074630852361, 13.510985536234127], text: "Helios Klinikum Berlin-Buch" },
        { position: [52.44013509460934, 13.595411511084112], text: "DRK Kliniken Köpenick" },
        { position: [52.51408957333404, 13.4949936108074], text: "Sana-Klinikum Lichtenberg" },
        { position: [52.47866440682539, 13.372811155674732], text: "St. Joseph Krankenhaus" },
    ]

  // Filtere die Locations basierend auf dem Radius
  useEffect(() => {
    const filtered = filterLocationsByRadius(userPosition.position, locations, radius)
    setFilteredLocations(filtered)
  }, [userPosition.position, locations, radius])

  // Handler zum Setzen des Radius
  const handleRadiusChange = (newRadius) => {
    setRadius(newRadius)
  }

  return (
    <div style={{ position: 'relative', height: '100%', width: '100%', overflow: 'hidden', zIndex: 1 }}>
      <MapContainer style={{ height: '100%', width: '100%' }} center={userPosition.position} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {filteredLocations.map((location, index) => (
          <Marker key={index} position={location.position}>
            <Popup>{location.text}</Popup>
          </Marker>
        ))}
        <Marker position={userPosition.position}>
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
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '14px'
}

const activeButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#fff',
  color: '#007BFF',
  border: '2px solid #007BFF'
}

export default MapWithMarkersAndRadius
