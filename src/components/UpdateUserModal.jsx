import { doc, updateDoc } from "firebase/firestore";
import React from "react";
import { useForm } from "react-hook-form";
import { FaX } from "react-icons/fa6";
import { db } from "../config/Firebase";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const UpdateUserModal = ({ userData, setUserModal }) => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: userData?.fullName,
      username: userData?.username,
    },
  });

  const onSubmit = async (data) => {
    const { name, username } = data;
    const docRef = doc(db, "Users", userData.id);
    try {
      await toast.promise(
        updateDoc(docRef, {
          username,
          fullName: name,
        }),
        {
          loading: "Updating...",
          error: "Unable to update",
          success: "Updated Succesfully",
        }
      );
    } catch (error) {
      console.error(error);
    } finally {
      navigate("/");
    }
  };

  return (
    <div className="modal">
      <div className="overlay"></div>
      <form onSubmit={handleSubmit(onSubmit)} className="modal-content">
        <FaX onClick={() => setUserModal(false)} className="X" />
        <div className="modal-input">
          <h2>Update user data</h2>
          <input type="text" {...register("name")} />
          <input type="text" {...register("username")} />
          <br />
          <button className="btn modal-button">GENERATE</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUserModal;
