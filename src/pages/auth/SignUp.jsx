import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { auth, db } from "../../config/Firebase";
import toast from "react-hot-toast";
import { doc, setDoc } from "firebase/firestore";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    const { email, password, username, fullName } = data;

    try {
      setLoading(true);
      const res = await toast.promise(
        createUserWithEmailAndPassword(auth, email, password),
        {
          loading: "Signing up",
          success: "User successfully created",
          error: "an error occured",
        }
      );
      if (res) {
        const UID = res.user.uid;

        await setDoc(doc(db, "Users", UID), {
          id: UID,
          fullName,
          username,
          email,
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }

    console.log(res);
    reset();
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section id="form">
      <div className="form-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="auth-input">
            <input
              type="text"
              placeholder="FullName"
              {...register("fullName", {
                required: "Input field cannot be empty",
              })}
            />
            {errors.fullName && (
              <div className="error">{errors.fullName.message}</div>
            )}
          </div>
          <div className="auth-input">
            <input
              type="text"
              placeholder="Username"
              {...register("username", {
                required: "Username cannot be empty",
              })}
            />
            {errors.username && (
              <div className="error">{errors.username.message}</div>
            )}
          </div>
          <div className="auth-input">
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email cannot be empty",
              })}
            />
            {errors.email && (
              <div className="error">{errors.email.message}</div>
            )}
          </div>
          <div className="auth-input">
            <input
              className="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              {...register("password", {
                required: "Password cannot be empty!!",
                minLength: {
                  value: 8,
                  message: "Password must contain 8 characters!!",
                },
              })}
            />
            <div onClick={handleShowPassword} className="show-Password">
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </div>
            {errors.password && (
              <div className="error">{errors.password.message}</div>
            )}
          </div>
          <button disabled={loading} className="btn">
            Register
          </button>
          <br />
        </form>
        <div className="register">
          <p>
            Are you an existing user? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
