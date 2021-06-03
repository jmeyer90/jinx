import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const Map = ({ business }) => {

  const businessLocation = {
    lat: business.lat, 
    lng: business.lng
  }

  const mapStyles = {
    height: "30vh",
    width: "80%"
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