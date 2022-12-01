import { useState, useRef } from 'react';
import {MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './App.css';
import "leaflet/dist/leaflet.css"
import L from "leaflet";


const markerIcon = new L.Icon({
  iconUrl: require("./resource/marker.png"),
  iconSize: [40, 40],
  iconAnchor: [17, 46], //[left/right, top/bottom]
  popupAnchor: [0, -46], //[left/right, top/bottom]
});


// Need to test in local 
function App() {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  navigator.geolocation.watchPosition((position) => {

    console.log(position.coords)
    let lat = position.coords.latitude; 
    let lng = position.coords.longitude;

    setLatLng({lat: lat, lng: lng})
  }, (err) => {console.log(err)}, options)

  const [latlng, setLatLng] = useState({lat: 0, lng: 0});
  const [zoomCenter, setZoomCenter] = useState(4);
  const mapRef = useRef();

  
  return (
    <div className="App">
      <MapContainer center={latlng} zoom={zoomCenter} scrollWheelZoom={true} >
        <TileLayer
          attribution='&copy; <a href="https://www.maptiler.com/">MapTiler</a> &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=rssMvPnGXHosYe9Ybksw"
        />
        <Marker position={latlng} icon={markerIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default App;
