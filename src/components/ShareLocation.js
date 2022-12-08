import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import "./ShareLocation.css";

const ShareLocation = () => {
  const [share, setShare] = useState(false);
  let getLocation;

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  const error = () => {
    console.error("error happaned");
  };

  const shareMyLocation = () => {
    getLocation = navigator.geolocation.watchPosition(
      (position) => {
        console.log(position.coords);
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;
      },
      (err) => {
        error();
      },
      options
    );
  };

  useEffect(() => {
    return () => {
      navigator.geolocation.clearWatch(getLocation);
    };
  });

  return (
    <Container>
      <div className="userButtons">
        <div className="Buttons">
          {share ? (
            <Button
              className="Button"
              variant="danger"
              onClick={() => {
                setShare(!share);
              }}
            >
              Stop sharing
            </Button>
          ) : (
            <Button className="Button" onClick={() => {setShare(!share); shareMyLocation()}}>
              Share my location
            </Button>
          )}
        </div>
      </div>
    </Container>
  );
};

export default ShareLocation;
