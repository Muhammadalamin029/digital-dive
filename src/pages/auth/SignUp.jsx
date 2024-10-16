import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <section id="form">
      <div className="form-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
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
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password cannot be empty!!",
                minLength: {
                  value: 8,
                  message: "Password must contain 8 characters!!",
                },
              })}
            />
            {errors.password && (
              <div className="error">{errors.password.message}</div>
            )}
          </div>
          <div className="auth-input">
            <input
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                required: "Password does not match!!",
              })}
            />
            {errors.confirmPassword && (
              <div className="error">{errors.confirmPassword.message}</div>
            )}
          </div>
          <button className="btn">Register</button>
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
