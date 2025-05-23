import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>
            Welcome to <span className="elder-text">Elder</span>
            <span className="caretext">Care</span>
          </h1>
          <p className="subtitle">Compassionate support for our senior community</p>
        </div>
      </div>

      {/* Announcement Section */}
      <div className="announcement-container">
        <div className="tabs">
          <button
            className={activeTab === "general" ? "active" : ""}
            onClick={() => setActiveTab("general")}
          >
            General Updates
          </button>
          <button
            className={activeTab === "events" ? "active" : ""}
            onClick={() => setActiveTab("events")}
          >
            Upcoming Events
          </button>
        </div>
        <div className="announcement-content">
          {activeTab === "general" ? (
            <p>ElderlyCare is expanding its services! Stay tuned for more updates.</p>
          ) : (
            <p>Join our community event this weekend to support the elderly.</p>
          )}
        </div>
      </div>

      {/* Info Cards Section */}
      <div className="info-container">
        {/* Services Card */}
        <div className="card services-card">
          <h2>Our Services</h2>
          <p>Comprehensive care solutions for elderly needs</p>
          <Link to="/services" className="card-btn">
            Explore Services
          </Link>
        </div>

        {/* Volunteer Card */}
        <div className="card volunteer-card">
          <h2>Become a Volunteer</h2>
          <p>Make a difference in elderly lives</p>
          <Link to="/volunteer" className="card-btn">
            Join Now
          </Link>
        </div>

        {/* Elderly Sign-Up Card */}
        <div className="card signup-card">
          <h2>Need Assistance?</h2>
          <p>Register to receive our support services</p>
          <Link to="/elderly-signup" className="card-btn">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
