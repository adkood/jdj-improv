'use client'

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet"; // Import Leaflet library
import "leaflet/dist/leaflet.css";
import { Spinner } from "@chakra-ui/react";


let redIcon;

if (typeof window !== 'undefined') {
  redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  })
}

const LeafletMap = ({ center, zoom }) => {
  return (
    <>
      {(typeof window !== "undefined") ? <MapContainer center={center} zoom={zoom} style={{ height: "100%", width: "100%", zIndex: "1" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={center} icon={redIcon}>
          <Popup>
            Over Here!
          </Popup>
        </Marker>
      </MapContainer> : <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      />}
    </>
  );
};

export default LeafletMap;
