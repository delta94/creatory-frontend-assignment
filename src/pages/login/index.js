import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context";
import { useHistory } from "react-router-dom";
import { PATH } from "../../constants/path";
import "./styles.css";

function Login() {
  const { handleLogin, isLoading, isAuthenticated, error } = useAuth();
  const history = useHistory();
  console.log(error);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    handleLogin(data);
  };

  useEffect(() => {
    if (isAuthenticated) {
      history.push(PATH.HOME);
    }
  }, [history, isAuthenticated]);

  return (
    <div className="login-wrapper">
      <h3 className="title-login-form">Login To Web App</h3>
      <span
        className={`error-layout message is-error ${
          error ? "visible" : "hidden"
        }`}
      >
        {error?.message}
      </span>
      <form className="form-group" onSubmit={handleSubmit(onSubmit)}>
        <div className="user-name-field">
          <input
            className={`form-control ${errors["username"]?.type && "is-error"}`}
            type="text"
            name="username"
            id="username"
            placeholder="Enter username..."
            control={control}
            autoComplete="off"
            {...register("username", {
              required: "Username is required!",
            })}
          />
          <span className={`message ${errors["username"]?.type && "is-error"}`}>
            {errors["username"]?.message || ""}
          </span>
        </div>

        <div className="password-field">
          <input
            className={`form-control ${errors["password"]?.type && "is-error"}`}
            type="password"
            name="password"
            id="password"
            placeholder="Enter password..."
            control={control}
            autoComplete="off"
            {...register("password", {
              required: "Password is required!",
            })}
          />
          <span className={`message ${errors["password"]?.type && "is-error"}`}>
            {errors["password"]?.message}
          </span>
        </div>

        <button
          className={
            !errors["username"] && !errors["password"] && !isLoading
              ? "button-confirm button-confirm-active"
              : "button-confirm button-confirm-disable"
          }
          type="submit"
        >
          {isLoading ? <img src="/svg/loading.svg" alt="Loading" /> : "Login"}
        </button>
      </form>
    </div>
  );
}

export default Login;
