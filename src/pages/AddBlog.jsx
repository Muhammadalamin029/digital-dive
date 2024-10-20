import React from "react";
import Form from "../components/Form";
import { useLoaderData } from "react-router-dom";

const AddBlog = () => {
  const data = useLoaderData();
  return (
    <section className="section" id="add-blog">
      <Form data={data} />
    </section>
  );
};

export default AddBlog;
