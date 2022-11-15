import { useState } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import './App.css';
import "leaflet/dist/leaflet.css"

function App() {

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  function success(pos) {

    console.log(pos);
    const crd = pos.coords;

    setCenter({lat: crd.latitude, lng: crd.longitude});

    // console.log('Your current position is:');
    // console.log(`Latitude : ${crd.latitude}`);
    // console.log(`Longitude: ${crd.longitude}`);
    // console.log(`More or less ${crd.accuracy} meters.`);
  }

  function error(err) {
    console.log(err);
  }

  const myLocation = navigator.geolocation.getCurrentPosition(success, error, options);

  const [center, setCenter] = useState({lat: 0, lng: 0});


  return (
    <div className="App">
      <MapContainer center={center} zoom={6} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.maptiler.com/">MapTiler</a> &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=rssMvPnGXHosYe9Ybksw"
        />
        {/* <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
      </MapContainer>
    </div>
  );
}

export default App;
