import React from "react";
import {
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <section className="footer">
      <div className="icons">
        <Link to="#">
          <FaFacebook className="a" />
        </Link>
        <Link to="#">
          <FaInstagram className="a" />
        </Link>
        <Link to="#">
          <FaYoutube className="a" />
        </Link>
        <Link to="#">
          <FaXTwitter className="a" />
        </Link>
      </div>
      <p>&copy;{`Copyright ${date} Digital Dive, All rights reserved`}</p>
    </section>
  );
};

export default Footer;
