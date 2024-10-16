import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>Welcome to digital dive</h1>
      <p>Your tech blog</p>
      <Link to="/login">Get Started</Link>
    </section>
  );
};

export default Welcome;
