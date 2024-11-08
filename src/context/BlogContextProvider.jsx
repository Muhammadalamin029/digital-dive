import React, { createContext, useRef, useState, useEffect } from "react";
import { auth } from "../config/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import Loader from "../components/Loader";

export const BlogContext = createContext();

const BlogContextProvider = ({ children }) => {
  const submitRef = useRef();
  const [user, setUser] = useState();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <BlogContext.Provider value={{ submitRef, user, userData, setUserData }}>
      {user === undefined ? <Loader /> : children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
