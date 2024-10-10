import React, { useContext } from "react";
import Markdown from "react-markdown";
import { BlogContext } from "../context/BlogContextProvider";
import { useNavigate } from "react-router-dom";

const ViewBlog = () => {
  const submitRef = useContext(BlogContext);

  const navigate = useNavigate();
  const submitData = async (data) => {
    try {
      const res = await fetch("http://localhost:8000/blogs/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error(error);
    }
    return;
  };

  const handleClick = () => {
    navigate("/blogs");
    submitData(submitRef.current);
  };

  return (
    <section className="section">
      <h1>View Blog</h1>
      <p>Here is a preview of your blog before publish.</p>
      <h3>Blog title</h3>
      <p>{submitRef.current.title}</p>
      <h3>Blog category</h3>
      <p>{submitRef.current.category}</p>
      <h3>Blog content</h3>
      <Markdown>{submitRef.current.content}</Markdown>
      <h2>More information on {submitRef.current.title}</h2>
      <button onClick={handleClick} className="btn button">
        PUBLISH
      </button>
    </section>
  );
};

export default ViewBlog;
