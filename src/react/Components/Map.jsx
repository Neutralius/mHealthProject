import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import React, { useState, useEffect } from 'react';
import { filterLocationsByRadius } from './Distanzmesser.jsx';

// Fix für fehlende Standard-Icons
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MapWithMarkers = () => {
    const [userPosition, setUserPosition] = useState({
        position: [52.51634963490139, 13.377652149017736],
        text: 'dein Standort',
    });

    // Alle Positionen der Notaufnahmen -> TODO: noch in extra Datei packen
    const locations = [
        { position: [52.52474739747537, 13.44001889248633], text: 'Vivantes Klinikum im Friedrichshain' },
        { position: [52.49418037564013, 13.40874535753571], text: 'Vivantes Klinikum am Urban' },
        { position: [52.43847783989801, 13.458062784102816], text: 'Vivantes Klinikum Neukölln' },
        { position: [52.46162097791152, 13.346515898211988], text: 'Vivantes Auguste-Viktoria-Klinikum' },
        { position: [52.54979097205315, 13.205673798014406], text: 'Vivantes Klinikum Spandau' },
        { position: [52.58987465043478, 13.309370415667551], text: 'Vivantes Humboldt-Klinikum' },
    ];

    const [filteredLocations, setFilteredLocations] = useState(locations);

    // Die Notaufnahmen werden gefiltert wenn sich die Position des Users verändert
    useEffect(() => {
        const filtered = filterLocationsByRadius(userPosition.position, locations, 10);
        setFilteredLocations(filtered);
    }, [userPosition.position, locations]);

    return (
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
    );
};

export default MapWithMarkers;
