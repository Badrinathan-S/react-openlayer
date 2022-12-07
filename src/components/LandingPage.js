import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <>
      <Container>
        <div className="userButtons">
          <div className="Buttons">
            <Link to="/track">
              <Button className="Button">Track cab</Button>
            </Link>
            <Link to="/shareLocation">
              <Button className="Button">Share location</Button>
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default LandingPage;
