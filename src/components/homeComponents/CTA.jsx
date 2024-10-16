import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="CTA d-flex justify-content-center align-items-center">
      <span className="overlay"></span>
      <div className="CTA-content text-center">
        <h1>Ready to dive deeper into the world of technology?</h1>
        <Link to="/blogs" className="button btn">
          Explore our latest news
        </Link>
      </div>
    </section>
  );
};

export default CTA;
