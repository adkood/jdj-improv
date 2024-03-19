'use client'

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Spinner } from "@chakra-ui/react";

// Custom marker icon
const customIcon = L.icon({
  iconUrl: "./redPointer.png", // Check the path to the icon image
  iconSize: [60, 60], // Verify the size of the icon
  iconAnchor: [20, 40], // Verify the icon anchor point
  popupAnchor: [0, -40], // Verify the popup anchor point
});

const LeafletMap = ({ center, zoom }) => {
  return (
    <MapContainer center={center} zoom={zoom} style={{ height: "100%", width: "100%", zIndex: "1" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={center} icon={customIcon}>
        <Popup>
          Over Here !
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default LeafletMap;

