import React, { useContext } from "react";
import { auth, db } from "../config/Firebase";
import { signOut } from "firebase/auth";
import { BlogContext } from "../context/BlogContextProvider";
import { doc, getDoc } from "firebase/firestore";
import { useLoaderData } from "react-router-dom";

const UserProfile = () => {
  const { userData, setUserData } = useContext(BlogContext);
  const data = useLoaderData();

  setUserData(data);

  const handleLogOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="section">
      <div className="user-data">
        <h1>{userData.fullName}</h1>
        <p className="user-details username">@{userData.username}</p>
        <p className="user-details">{userData.email}</p>
      </div>
      <button className="btn button" onClick={handleLogOut}>
        Logout
      </button>
    </section>
  );
};

const generateUserDetails = async () => {
  try {
    const user = await getDoc(doc(db, "Users", auth.currentUser.uid));
    return user.data();
  } catch (error) {
    console.log(error);
  }
};

export { UserProfile as default, generateUserDetails };
