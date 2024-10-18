import React, { createContext, useRef, useState } from "react";

export const BlogContext = createContext();

const BlogContextProvider = ({ children }) => {
  const submitRef = useRef();
  const [user, setUser] = useState(false);
  const [userData, setUserData] = useState({});

  return (
    <BlogContext.Provider
      value={{ submitRef, user, setUser, userData, setUserData }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
