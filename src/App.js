import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

import Home from "./pages/Home.js";
import Services from "./pages/Services.js";
import Volunteer from "./pages/Volunteer.js";
import ElderlySignup from "./pages/ElderlySignup.js";
import "./App.css";

const App = () => {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <span className="elder-text">Elder</span>
            <span className="care-text">Care</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/volunteer">Volunteer</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/elderly-signup">Elderly Sign Up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route
          path="/elderly-signup"
          element={<ElderlySignup selectedService="general" goBack={() => navigate(-1)} />}
        />
      </Routes>
    </div>
  );
};

export default App;
