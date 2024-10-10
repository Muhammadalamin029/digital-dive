import React from "react";
import Header from "../components/Header";
import Description from "../components/Description";
import HomeBlog from "../components/HomeBlog";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Header />;
      <Description />
      <HomeBlog />
      <CTA />
    </>
  );
};

export default HomePage;
