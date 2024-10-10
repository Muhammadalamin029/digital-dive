import React from "react";
import {
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <section className="footer">
      <div className="icons">
        <a href="">
          <FaFacebook className="a" />
        </a>
        <a href="">
          <FaInstagram className="a" />
        </a>
        <a href="">
          <FaYoutube className="a" />
        </a>
        <a href="">
          <FaXTwitter className="a" />
        </a>
      </div>
      <p>&copy;{`Copyright ${date} Digital Dive, All rights reserved`}</p>
    </section>
  );
};

export default Footer;
