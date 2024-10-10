import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      style={{
        backgroundImage: `url(Images/BG.jpg)`,
      }}
      className="d-flex justify-content-center align-items-center"
    >
      <span className="overlay"></span>
      <div className="text-center header-content">
        <h1>Your go-to destination for all things tech</h1>
        <p>
          We provide the latest news, reviews, and insight on technology,
          <br /> gadget and software,
        </p>
        <Link to="/blogs" className="button btn bg-dark">
          Explore our latest news
        </Link>
      </div>
    </header>
  );
};

export default Header;
