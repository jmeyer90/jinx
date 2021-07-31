import React, { useState } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const SearchMap = ({ businesses }) => {
    const iterableBusinesses = Object.values(businesses)
    const firstBusiness = iterableBusinesses[0]
    const defaultLat = 40.726109
    const defaultLng = -73.9842246
    const centerBusinessLocation = {
        lat: defaultLat,
        lng: defaultLng
    }

    const [center, setCenter] = useState(centerBusinessLocation)

    if (iterableBusinesses.length != 0 
            && center.lng == defaultLng 
            && center.lat == defaultLat
        ) {
        setCenter({
            lat: firstBusiness.lat,
            lng: firstBusiness.lng
        })
    }

    const mapStyles = {
        height: "100vh",
        width: "45%"
    }

    const renderMarkers = () => (
        iterableBusinesses.map(business =>{ 
            const location = {
                lat: business.lat,
                lng: business.lng
            }

            return(
                <Marker 
                    key={business.name} 
                    position={location} 
                    onClick={() => setCenter(location)}
                />
            )
        })
    )

    return (
        <LoadScript
            googleMapsApiKey={window.googleAPIKey}>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={center}>
                {renderMarkers()}
            </GoogleMap>

        </LoadScript>
    )
}

export default SearchMap;