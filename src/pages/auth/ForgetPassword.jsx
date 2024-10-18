import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { auth } from "../../config/Firebase";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const ForgetPassword = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data) => {
    const { email } = data;
    try {
      setLoading(true);
      await toast.promise(sendPasswordResetEmail(auth, email), {
        loading: "Sending email",
        success: "Email succesfully sent",
        error: "Email not found",
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section id="form">
      <div className="form-container">
        <h1>Reset Password</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="auth-input">
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email cannot be empty!!",
              })}
            />
            <Link to="/login">
              <FaArrowLeft />
              Back to login
            </Link>
            {errors.email && (
              <div className="error">{errors.email.message}</div>
            )}
          </div>
          <button disabled={loading} className="btn">
            Reset Password
          </button>
          <br />
        </form>
      </div>
    </section>
  );
};

export default ForgetPassword;
