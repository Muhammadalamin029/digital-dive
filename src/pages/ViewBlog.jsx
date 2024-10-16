import React, { useContext, useState } from "react";
import Markdown from "react-markdown";
import { BlogContext } from "../context/BlogContextProvider";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "../config/Firebase";
import { ref, uploadBytes } from "firebase/storage";
import toast from "react-hot-toast";

const ViewBlog = () => {
  const [blogImage, setBlogImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const { submitRef } = useContext(BlogContext);

  const blogDataRef = collection(db, "blogs");

  const submitData = async (data) => {
    await addDoc(blogDataRef, data);
  };

  const navigate = useNavigate();

  const handleFormSubmit = async () => {
    if (!blogImage) {
      toast.error("Image not Uploaded");
      return;
    }
    try {
      const blogImageRef = ref(storage, `blogPostImage/${blogImage.name}`);
      await uploadBytes(blogImageRef, blogImage);
    } catch (error) {
      console.error(error);
    } finally {
      toast.success("Blog Published Successfully");
      submitData(submitRef.current);
      navigate("/blogs");
    }
  };

  return (
    <section className="section">
      <h1>View Blog</h1>
      <p>Here is a preview of your blog before publish.</p>
      <label htmlFor="blogImage">Upload an image for the blog post: </label>
      <br />
      <input
        name="blogImage"
        type="file"
        onChange={(e) => setBlogImage(e.target.files[0])}
      />
      <br />
      <br />
      <h3>
        Blog title: <span>{submitRef.current.title}</span>
      </h3>
      <h3>
        Blog category: <span>{submitRef.current.category}</span>
      </h3>
      <p></p>
      <h3>Blog content</h3>
      <Markdown>{submitRef.current.content}</Markdown>
      <button onClick={handleFormSubmit} className="btn button">
        PUBLISH
      </button>
    </section>
  );
};

export default ViewBlog;
