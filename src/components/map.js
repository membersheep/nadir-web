import React from 'react'
import GoogleMapReact from 'google-map-react'
import "./map.css"

const defaultProps = {
  center: {
    lat: 45.414132300925004,
    lng: 11.87951543266815,
  },
  zoom: 15,
}

const Marker = props => { return <> <img class="pin" src="/pin.png" alt="Logo"/> </> }

const GoogleMap = () => (
  <div style={{ height: '50vh', width: '100%' }}>
    <GoogleMapReact 
      bootstrapURLKeys={{ key: process.env.API_KEY }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <Marker lat={defaultProps.center.lat} lng={defaultProps.center.lng} />
    </GoogleMapReact>
  </div>
)

export default GoogleMap
