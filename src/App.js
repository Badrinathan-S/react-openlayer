import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import TrackLocation from "./components/TrackLocation";
import "./App.css";
import ShareLocation from "./components/ShareLocation";
import Header from "./components/Header";

const App = () => {
  const value = useLocation();
  return (
    <>
      {value.pathname === '/' ? <></> : <Header />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/track" element={<TrackLocation />} />
        <Route path="/shareLocation" element={<ShareLocation />} />
      </Routes>
    </>
  );
};

export default App;
