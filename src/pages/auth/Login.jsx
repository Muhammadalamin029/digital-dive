import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <section id="form">
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="auth-input">
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email cannot be empty!!",
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
                  message: "Password must contain 8 characters",
                },
              })}
            />
            {errors.password && (
              <div className="error">{errors.password.message}</div>
            )}
            <Link>Forgotten password</Link>
          </div>
          <button className="btn">Login</button>
          <br />
        </form>
        <div className="register">
          <p>
            Are you a new user? <Link to="/signUp">Register</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
