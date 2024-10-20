import React, { useContext, useState } from "react";
import Markdown from "react-markdown";
import { BlogContext } from "../context/BlogContextProvider";
import { useNavigate } from "react-router-dom";
import { setDoc, doc } from "firebase/firestore";
import { db, storage } from "../config/Firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v6 } from "uuid";
import toast from "react-hot-toast";
import { randomAlphanumeric } from "random-string-alphanumeric-generator";

const ViewBlog = () => {
  const [blogImage, setBlogImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const { submitRef } = useContext(BlogContext);

  const submitData = async (data) => {
    try {
      const publish = await toast.promise(
        setDoc(doc(db, "blogs", randomAlphanumeric(14, "lowercase")), data),
        {
          loading: "publishing",
          success: "Blog Published Successfully",
          error: "Blog unable to publish",
        }
      );
      if (publish) {
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
    } finally {
      navigate("/");
    }
  };

  const navigate = useNavigate();

  const handleFormSubmit = async () => {
    if (!blogImage) {
      toast.error("Image not Uploaded");
      return;
    }
    try {
      setLoading(true);
      const blogImageRef = ref(storage, `blogPostImage/${v6()}`);
      const res = await toast.promise(uploadBytes(blogImageRef, blogImage), {
        loading: "Uploading image",
        success: "Image Successfully uploaded",
        error: "Image not uploaded",
      });
      if (res) {
        const Url = await getDownloadURL(blogImageRef);
        submitRef.current.imgURL = Url;
        submitData(submitRef.current);
      }
    } catch (error) {
      console.error(error);
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
      <button
        disabled={loading}
        onClick={handleFormSubmit}
        className="btn button"
      >
        PUBLISH
      </button>
    </section>
  );
};

export default ViewBlog;
