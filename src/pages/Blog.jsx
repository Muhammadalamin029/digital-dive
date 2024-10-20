import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import Markdown from "react-markdown";
import { useParams, useLoaderData, Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/Firebase";

const Blog = () => {
  const { id } = useParams();
  const blog = useLoaderData();

  return (
    <section className="section">
      <Link className="back-link" to="/blogs">
        <FaArrowLeft /> Back to blog page
      </Link>
      <br />
      <br />
      <div
        style={{
          backgroundImage: `url(${blog.imgURL})`,
        }}
        className="blog-image"
      ></div>
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

const blogLoader = async ({ params }) => {
  try {
    const blogRef = doc(db, "blogs", params.id);
    const data = await getDoc(blogRef);
    return data.data();
  } catch (error) {
    console.error(error);
  }
};

export { Blog as default, blogLoader };
