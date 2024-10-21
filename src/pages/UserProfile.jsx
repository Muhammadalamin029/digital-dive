import React, { useContext, useState } from "react";
import { auth, db } from "../config/Firebase";
import { signOut } from "firebase/auth";
import { BlogContext } from "../context/BlogContextProvider";
import { doc, getDoc } from "firebase/firestore";
import { useLoaderData } from "react-router-dom";
import UpdateUserModal from "../components/UpdateUserModal";
import UserProfileModal from "../components/UserProfileModal";

const UserProfile = () => {
  const { userData, setUserData } = useContext(BlogContext);
  const [userModal, setUserModal] = useState(false);
  const [userProfilePic, setUserProfilePic] = useState(false);
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
        <div className="profile-pic-container">
          <div
            style={{ backgroundImage: `url(${userData.imgURL})` }}
            className="user-profile-pic"
          ></div>
          <div className="user-profile-details">
            <h1>{userData.fullName}</h1>
            <p className="user-details username">@{userData.username}</p>
            <p className="user-details">{userData.email}</p>
          </div>
        </div>
        <div className="update-user-data">
          {userModal && (
            <UpdateUserModal setUserModal={setUserModal} userData={userData} />
          )}
          <button onClick={() => setUserModal(!userModal)} className="btn">
            Update user data
          </button>
          {userProfilePic && (
            <UserProfileModal
              setUserProfilePic={setUserProfilePic}
              userData={userData}
            />
          )}
          <button
            onClick={() => setUserProfilePic(!userProfilePic)}
            className="btn"
          >
            Updata profile pic
          </button>
        </div>
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
