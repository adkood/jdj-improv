import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; 

const LeafletMap = ({ center, zoom }) => {
  return (
    <MapContainer center={center} zoom={zoom} style={{ height: "100%", width: "100%" , zIndex: "1"}}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={center}>
        <Popup>
          JDJ Pvt. Lmt.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default LeafletMap;
