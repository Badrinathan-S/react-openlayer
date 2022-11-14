

function App() {

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  function success(pos) {

    console.log(pos);
    // const crd = pos.coords;
  
    // console.log('Your current position is:');
    // console.log(`Latitude : ${crd.latitude}`);
    // console.log(`Longitude: ${crd.longitude}`);
    // console.log(`More or less ${crd.accuracy} meters.`);
  }

  function error(err) {
    console.log(err);
  }

  const myLocation = navigator.geolocation.getCurrentPosition(success, error, options);


  return (
    <div className="App">
      Hi
    </div>
  );
}

export default App;
