import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { BlogContext } from "../context/BlogContextProvider";
import Modal from "./Modal";

const Form = () => {
  const submitRef = useContext(BlogContext);
  const [modal, setModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      category: "",
      content: "",
      publishDate: "",
      authorName: "",
      authorEmail: "",
      authorPhone: "",
    },
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    navigate("/add-blog/view");
    submitRef.current = data;
  };

  const handleGenerate = () => {
    setModal(!modal);
  };

  return (
    <form id="publishForm" onSubmit={handleSubmit(onSubmit)}>
      <h1>Add Blog</h1>
      <div className="input-field">
        <input
          {...register("title", {
            required: "Enter Blog Title!!",
            minLength: {
              value: 20,
              message: "Title must be more than 20 characters",
            },
          })}
          type="text"
          placeholder="Blog Title"
        />
        {errors.title && <p className="error">{errors.title.message}</p>}
      </div>
      <div className="input-field">
        <select {...register("category", { required: "Choose a category!!" })}>
          <option value="">---Choose Category---</option>
          <option value="AI">Artificial Intelligence</option>
          <option value="web-dev">Web develop</option>
          <option value="Cloud Computing">Cloud Computing</option>
          <option value="Data Science">Data Science</option>
          <option value="DevOps">DevOps</option>
          <option value="Machine Learning">Machine Learning</option>
          <option value="Robotics">Robotics</option>
          <option value="UI/UX Design">UI/UX Design</option>
        </select>

        {errors.category && <p className="error">{errors.category.message}</p>}
      </div>
      <div className="input-field">
        <textarea
          {...register("content", {
            required: "Enter content!!",
            minLength: {
              value: 250,
              message: "Blog content must be more than 250 characters",
            },
          })}
          placeholder="Blog Content.."
          cols="30"
          rows="10"
        ></textarea>
        {errors.content && <p className="error">{errors.content.message}</p>}
      </div>
      <div className="ai-div">
        <p>
          Generate more information on your content
          <Link className="toogleModal" onClick={handleGenerate}>
            Click here
          </Link>
        </p>

        {modal && <Modal setModal={setModal} />}
      </div>
      <div className="input-field">
        <input
          {...register("publishDate", { required: "Enter date!!" })}
          placeholder="Publish date..."
          type="date"
        />
        {errors.publishDate && (
          <p className="error">{errors.publishDate.message}</p>
        )}
      </div>
      <h2>Author's Details</h2>
      <div className="input-field">
        <input
          {...register("authorName", {
            required: "Enter name!!",
            minLength: {
              value: 8,
              message: "Name must be more than 8 characters",
            },
          })}
          type="text"
          placeholder="Author's name"
        />
        {errors.authorName && (
          <p className="error">{errors.authorName.message}</p>
        )}
      </div>
      <div className="input-field">
        <input
          {...register("authorEmail", {
            required: "Enter a valid email",
          })}
          type="email"
          placeholder="example@gmail.com"
        />
        {errors.authorEmail && (
          <p className="error">{errors.authorEmail.message}</p>
        )}
      </div>
      <div className="input-field">
        <input
          {...register("authorPhone", {
            required: "Enter a valid phone number",
          })}
          type="number"
          placeholder="+2349012345678"
        />
        {errors.authorPhone && (
          <p className="error">{errors.authorPhone.message}</p>
        )}
      </div>

      <button className="form-btn button btn" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
