import React from "react";
import useUploadImage from "../hooks/useUploadImage";
import { FaX } from "react-icons/fa6";

const UserProfileModal = ({ setUserProfilePic, userData }) => {
  const { handleImageUpload, uploadImage } = useUploadImage(userData);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="modal">
      <div className="overlay"></div>
      <div className="modal-content">
        <FaX onClick={() => setUserProfilePic(false)} className="X" />
        <div className="modal-input">
          <h2>Update Profile Pic</h2>
          <input onChange={handleImageUpload} type="file" />
          <br />
          <button onClick={uploadImage} className="btn modal-button">
            UPDATE
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfileModal;
