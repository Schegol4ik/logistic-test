import React, {useState} from "react";
import {MapContainer, TileLayer} from "react-leaflet";

import RoutingControl from './RoutingControl'


const Map = ({start, end}) => {
    const [map, setMap] = useState(null);

    return (
        <MapContainer
            center={[52, 37]}
            zoom={3}
            zoomControl={false}
            style={{height: "100vh", width: "100%", padding: 0, position: 'relative', zIndex: '0'}}
            whenCreated={map => setMap(map)}
        >
            {start && <RoutingControl
                start={start}
                end={end}
                color={'#757de8'}
            />}
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    );
};

export default Map;
