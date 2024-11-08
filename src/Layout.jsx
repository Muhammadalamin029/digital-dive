import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./ScrollToTop";

const Layout = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
