import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../userActions/userAction";
import { useEffect } from "react";

function FormSignin(props) {
  let navigate = useNavigate();
  const { loading, userInfo } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  useEffect(() => {
    if (userInfo) {
      navigate("/user/profile");
    }
  }, [navigate, userInfo]);
  const submitForm = (data) => {
    dispatch(userLogin(data));
  };

  return (
    <>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit(submitForm)}>
            <div className="input-wrapper">
              <label htmlFor="email">Username</label>
              <input type="email" id="email" {...register("email")} />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                autoComplete="on"
                {...register("password")}
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

            <button type="submit" className="sign-in-button">
              Sign In
            </button>
          </form>
        </section>
      </main>
    </>
  );
}

export default FormSignin;
