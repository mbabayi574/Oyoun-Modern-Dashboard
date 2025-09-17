import React, { useEffect, useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AppSettings } from "./../../config/app-settings.js";
import { axiosPost } from "../../utils/Axios Utils/Utils.js";

function PagesLogin() {
  const context = useContext(AppSettings);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    context.setAppHeaderNone(true);
    context.setAppSidebarNone(true);
    context.setAppContentClass("p-0");

    return function cleanUp() {
      context.setAppHeaderNone(false);
      context.setAppSidebarNone(false);
      context.setAppContentClass("");
    };

    // eslint-disable-next-line
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");
    console.log("Username:", username);
    console.log("Password:", password);

    const result = await axiosPost("/api/token/", {
      username: username,
      password: password,
    });

    console.log("Login result:", result);

    localStorage.setItem("access_token", result.access);
    localStorage.setItem("refresh_token", result.refresh);
    setRedirect(true);
  }

  if (redirect) {
    return <Navigate to="/" />;
  }
  return (
    <div className="login">
      <div className="login-content">
        <form onSubmit={handleSubmit}>
          <h1 className="text-center">ورود</h1>
          <div className="text-inverse text-opacity-50 text-center mb-4">
            برای حفاظت از شما، لطفا هویت خود را تأیید کنید.
          </div>
          <div className="mb-3">
            <label className="form-label">
              نام کاربری <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="form-control form-control-lg bg-white bg-opacity-5"
              placeholder=""
            />
          </div>
          <div className="mb-3">
            <div className="d-flex">
              <label className="form-label">
                رمزعبور <span className="text-danger">*</span>
              </label>
              <a
                href="#/"
                className="ms-auto text-inverse text-decoration-none text-opacity-50"
              >
                فراموشی رمزعبور؟
              </a>
            </div>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control form-control-lg bg-white bg-opacity-5"
              placeholder=""
            />
          </div>
          <div className="mb-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="customCheck1"
              />
              <label className="form-check-label" htmlFor="customCheck1">
                من را به خاطر بسپار
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-outline-theme btn-lg d-block w-100 fw-500 mb-3"
          >
            ورود
          </button>
          <div className="text-center text-inverse text-opacity-50">
            حساب کاربری ندارید؟ <Link to="/pages/register">ثبت‌نام کنید</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PagesLogin;
