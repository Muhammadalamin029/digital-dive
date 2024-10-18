import React, { useContext } from "react";
import { auth, db } from "../config/Firebase";
import { signOut } from "firebase/auth";
import { BlogContext } from "../context/BlogContextProvider";
import { useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";

const UserProfile = () => {
  const { setUser, userData, setUserData } = useContext(BlogContext);

  const handleLogOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    } finally {
      setUser(false);
    }
  };

  useEffect(() => {
    const generateUserDetails = async () => {
      try {
        const user = await getDoc(doc(db, "Users", auth.currentUser.uid));
        setUserData(user.data());
      } catch (error) {
        console.log(error);
      }
    };

    generateUserDetails();
  }, []);

  return (
    <section className="section">
      <h1>{userData.fullName}</h1>
      <h3>@{userData.username}</h3>
      <h2>{userData.email}</h2>
      <button className="btn button" onClick={handleLogOut}>
        Logout
      </button>
    </section>
  );
};

export default UserProfile;
