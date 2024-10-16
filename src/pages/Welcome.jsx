import React from "react";
import Footer from "../components/Footer";
import { FaChartBar, FaClock, FaNetworkWired } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="section" id="welcome-header">
        <h1 className="welcome-header">Welcome to Digital Dive</h1>
        <h3 className="welcome-subheader">Explore the Depths of Technology</h3>
        <Link className="CTA-btn btn" to="/login">
          Get Started
        </Link>
      </section>
      <section id="features-sec">
        <h2>Unlock Exclusive Contents</h2>
        <div className="row">
          <div className="col-lg-4 features">
            <figure>
              <FaClock className="feature-icon" />
              <figcaption>Stay Updated on latest tech trends</figcaption>
            </figure>
          </div>
          <div className="col-lg-4 features">
            <figure>
              <FaChartBar className="feature-icon" />
              <figcaption>Access expert analysis and insights</figcaption>
            </figure>
          </div>
          <div className="col-lg-4 features">
            <figure>
              <FaNetworkWired className="feature-icon" />
              <figcaption>Join the community of tech enthusiasts</figcaption>
            </figure>
          </div>
        </div>
      </section>
      <section className="section" id="welcome-CTA">
        <h2 className="welcome-header">Your Tech Journey Starts Here</h2>
        <h3 className="welcome-subheader">Dive Into Innovation</h3>
        <Link className="btn CTA-btn" to="/login">
          Get Started
        </Link>
      </section>
      <Footer />
    </>
  );
};

export default Welcome;
