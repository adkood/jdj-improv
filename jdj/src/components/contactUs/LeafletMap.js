'use client'

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Spinner } from "@chakra-ui/react";

const LeafletMap = ({ center, zoom }) => {
  return (
    <>
      {(typeof window !== "undefined") ? <MapContainer center={center} zoom={zoom} style={{ height: "100%", width: "100%", zIndex: "1" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={center}>
          <Popup>
            Over Here !
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
