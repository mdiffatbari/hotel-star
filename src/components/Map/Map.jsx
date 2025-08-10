import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import markerShadowPng from 'leaflet/dist/images/marker-shadow.png';

const customIcon = new Icon({
  iconUrl: markerIconPng,
  shadowUrl: markerShadowPng,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

const Map = () => {
  return (
    <div className="w-full h-[500px]">
      <MapContainer
        center={[23.8103, 90.4125]}
        zoom={13}
        scrollWheelZoom={false}
        className="w-full h-full rounded-lg"
      >
        
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        
        <Marker position={[23.8103, 90.4125]} icon={customIcon}>
          <Popup>
            Dhaka City<br /> Capital of Bangladesh.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
