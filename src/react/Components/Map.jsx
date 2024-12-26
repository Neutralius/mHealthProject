import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapWithMarkers = () => {
    const points = [
        { position: [52.52474739747537, 13.44001889248633], text: 'Vivantes Klinikum im Friedrichshain' },
        { position: [52.49418037564013, 13.40874535753571], text: 'Vivantes Klinikum am Urban' },
        { position: [52.43847783989801, 13.458062784102816], text: 'Vivantes Klinikum Neukölln' },
        { position: [52.46162097791152, 13.346515898211988], text: 'Vivantes Auguste-Viktoria-Klinikum' },
        { position: [52.54979097205315, 13.205673798014406], text: 'Vivantes Klinikum Spandau' },
        { position: [52.58987465043478, 13.309370415667551], text: 'Vivantes Humboldt-Klinikum' },
        {position: [52.51634963490139, 13.377652149017736], text: 'Standort'}
    ];

    return (
        <MapContainer style={{ height: '500px', width: '100%' }} center={[50, 10]} zoom={5}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {points.map((point, index) => (
                <Marker key={index} position={point.position}>
                    <Popup>{point.text}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default MapWithMarkers;