import React, { createContext, useRef, useState } from "react";

export const BlogContext = createContext();

const BlogContextProvider = ({ children }) => {
  const submitRef = useRef();
  const [user, setUser] = useState(false);

  return (
    <BlogContext.Provider value={{ submitRef, user, setUser }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
