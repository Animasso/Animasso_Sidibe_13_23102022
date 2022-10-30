import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
function FormSignin(props) {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                {...register("userName", { required: true })}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                autoComplete="on"
                {...register("password", { required: true, maxLength: 12 })}
              />
            </div>
            <div className="input-remember">
              <input
                type="checkbox"
                id="remenber-me"
                {...register("remember-me")}
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>

            <button
              type="submit"
              className="sign-in-button"
              onClick={(e) => {
                e.preventDefault();
                navigate("/profile");
              }}
            >
              Sign In
            </button>
          </form>
        </section>
      </main>
    </>
  );
}

export default FormSignin;
