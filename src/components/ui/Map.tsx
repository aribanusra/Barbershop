import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 33.191451,
  lng: -97.134865,
};


const Map : React.FC = () => (
  <LoadScript googleMapsApiKey="AIzaSyC1dQZfj-IdeQvHLNa0ySkoZgsQhAvIw4c">
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
      <Marker position={center} />
    </GoogleMap>
  </LoadScript>
);



export default Map