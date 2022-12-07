import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <Container>
      <div className="header">
        <Link to="/">
          <Button variant="secondary">Back</Button>
        </Link>
      </div>
    </Container>
  );
};

export default Header;
