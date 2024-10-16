import React from "react";
import Header from "../components/Header";
import Description from "../components/homeComponents/Description";
import HomeBlog from "../components/homeComponents/HomeBlog";
import CTA from "../components/homeComponents/CTA";
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
