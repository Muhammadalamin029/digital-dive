import React, { useEffect, useState } from "react";
import { FaComment, FaReadme, FaShare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { db } from "../config/Firebase";
import { getDocs, collection } from "firebase/firestore";

const Blogs = ({ isHome = false }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const location = window.location.href;

  const blogDataRef = collection(db, "blogs");

  const getData = async () => {
    try {
      const data = await getDocs(blogDataRef);
      const filteredBlog = data.docs.map(
        (doc) => (
          console.log(doc),
          {
            ...doc.data(),
            id: doc.id,
          }
        )
      );
      setBlogs(filteredBlog);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(true);
    }
  };

  useEffect(() => {
    getData();
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
      {loading ? (
        blogs.map((blog) => (
          <div key={blog.id} className="blog-container">
            <div className="blog-item">
              <div className="blog-image">
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
                  <Link>
                    <ToastContainer />
                    <span>Comment</span> <FaComment />
                  </Link>
                  <Link
                    onClick={() => {
                      navigator.clipboard.writeText(`${location}/${blog.id}`);
                      toast.success("Link Copied!!!");
                    }}
                  >
                    <span>Share</span> <FaShare />
                  </Link>
                  <Link to={`/blogs/${blog.id}`}>
                    <span>Readmore</span>
                    <FaReadme />
                  </Link>
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h2>Loading</h2>
      )}
    </section>
  );
};

export { Blogs as default };
