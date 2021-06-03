import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const Map = ({ business }) => {

  const businessLocation = {
    lat: 41.3851, 
    lng: 2.1734
  }

  const mapStyles = {
    height: "100vh",
    width: "100%"
  };

  return (
    <LoadScript
      googleMapsApiKey={window.googleAPIKey}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={businessLocation}>
        <Marker key={business.name} position={businessLocation}/>
      </GoogleMap>

    </LoadScript>
  )
}

export default Map;