import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";
import { useParams } from "react-router-dom";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    const fetchBlog = async () => {
      const api = `http://localhost:8000/blogs/${id}`;
      try {
        const response = await fetch(api);
        const data = await response.json();
        setBlog(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlog();
  }, []);

  return (
    <section className="section">
      <div className="blog-image"></div>
      <br />
      <br />
      <h1>{blog.title} </h1>
      <br />
      <br />
      <Markdown>{blog.content}</Markdown>
      <div className="authorDetails">
        <h2>Author details</h2>
        <p>
          <span>Name:</span> {blog.authorName}
        </p>
        <p>
          <span>Email:</span> {blog.authorEmail}
        </p>
        <p>
          <span>Phone Number:</span> {blog.authorPhone}
        </p>
      </div>
    </section>
  );
};

export default Blog;
