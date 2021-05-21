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

const AnyReactComponent = ({ text }) => <div>{text}</div>
const Marker = props => {
  return <>
    <div className="pin"></div>
    <div className="pulse"></div>
  </>
}

const GoogleMap = () => (
  <div style={{ height: '50vh', width: '100%' }}>
    <GoogleMapReact 
      bootstrapURLKeys={{ key: 'AIzaSyCAhfVYHcht1KenhLg1cHt4Sc-bAHaCrR4' }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <Marker lat={defaultProps.center.lat} lng={defaultProps.center.lng} />
    </GoogleMapReact>
  </div>
)

export default GoogleMap
