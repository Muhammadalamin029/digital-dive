import React from "react";
import Blogs from "../Blogs";

const HomeBlog = () => {
  return (
    <section className="section" id="home-blog">
      <Blogs isHome={true} />
    </section>
  );
};

export default HomeBlog;
