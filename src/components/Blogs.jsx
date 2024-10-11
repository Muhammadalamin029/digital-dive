import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blogs = ({ isHome = false }) => {
  const [blogs, setBlogs] = useState([]);
  const [imgUrl, setImgUrl] = useState();

  useEffect(() => {
    const fetchBlogs = async () => {
      const api = isHome
        ? "http://localhost:8000/blogs?_limit=3"
        : "http://localhost:8000/blogs/";
      try {
        const response = await fetch(api);
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlogs();
  }, []);

  const style = {
    marginRight: "20px",
    display: "inline-block",
    color: "#007bff",
    fontWeight: 700,
    fontSize: "3rem",
  };

  return (
    <section id="blog">
      <div className="heading">
        <h2 style={style}>{isHome ? "Latest Blogs" : "All Blog"}</h2>
      </div>
      {blogs.map((blog) => (
        <div key={blog.id} className="blog-container">
          <div className="blog-item">
            <div
              style={{
                backgroundImage: `url(Images/Blog.jpg)`,
              }}
              className="blog-image"
            >
              <img src="vite.svg" alt="" />
            </div>
            <div className="blog-content">
              <div className="author">
                <div className="img"></div>
                <div className="author-details">
                  <p>{blog.authorName}</p>
                  <p>{blog.publishDate}</p>
                </div>
              </div>
              <h1 className="blog-headline">{blog.title}</h1>
              <p className="link">
                <Link>Add comments</Link>
                <Link to={`/blogs/${blog.id}`}>Read more</Link>
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Blogs;
