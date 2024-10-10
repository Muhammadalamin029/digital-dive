import React, { createContext, useRef, useState } from "react";

export const BlogContext = createContext();

const BlogContextProvider = ({ children }) => {
  const submitRef = useRef();

  return (
    <BlogContext.Provider value={submitRef}>{children}</BlogContext.Provider>
  );
};

export default BlogContextProvider;
