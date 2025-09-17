import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody } from "./../../components/card/card.jsx";
import { AppSettings } from "./../../config/app-settings.js";
import { Icon } from "@iconify/react";

function Landing() {
  const context = useContext(AppSettings);

  useEffect(() => {
    context.setAppHeaderNone(true);
    context.setAppSidebarNone(true);
    context.setAppContentClass("p-0");
    context.setAppContentFullHeight(true);

    return function cleanUp() {
      context.setAppHeaderNone(false);
      context.setAppSidebarNone(false);
      context.setAppContentClass("");
      context.setAppContentFullHeight(false);
    };

    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div id="header" className="app-header navbar navbar-expand-lg p-0">
        <div className="container-xxl px-3 px-lg-5">
          <button
            className="navbar-toggler border-0 p-0 me-3 fs-24px shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
          >
            <span className="h-2px w-25px bg-gray-500 d-block mb-1"></span>
            <span className="h-2px w-25px bg-gray-500 d-block"></span>
          </button>
          <Link
            to="/"
            className="navbar-brand d-flex align-items-center position-relative me-auto brand px-0 w-auto"
          >
            <span className="brand-logo d-flex">
              <span className="brand-img">
                <span className="brand-img-text text-theme">O</span>
              </span>
              <span className="brand-text">نرم‌افزار جامع عیون</span>
            </span>
          </Link>

          <div className="ms-3">
            <Link
              to="/"
              className="btn btn-outline-theme btn-sm fw-semibold text-uppercase px-2 py-1 fs-10px text-nowrap"
            >
              پشتیبانی <i className="fa fa-arrow-left ms-1"></i>
            </Link>
          </div>
        </div>
      </div>

      <div className="container-xxl px-3 px-lg-5">
        <hr className="opacity-4 m-0" />
      </div>

      <div id="features" className="py-5 position-relative">
        <div className="container-xxl p-3 p-lg-5 z-2 position-relative">
          <div className="text-center mb-5">
            <h1 className="mb-3">داشبوردها</h1>
            <p className="fs-16px text-body text-opacity-50 mb-5">
              در این صفحه میتوانید نرم‌افزارهای قابل استفاده خود را مشاهده
              فرمایید.
              <br />
              در صورت نیاز به راهنمایی با پشتیبانی در ارتباط باشید.
            </p>
          </div>
          <div className="row g-3 g-lg-5">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <img
                src="/assets/img/landing/mockup-1.jpg"
                className="shadow d-block mw-100 cursor-pointer"
                onClick={() => console.log("Clicked")}
              />

              <div className="text-center my-3 text-body fw-bold">
                داشبورد اصلی
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <img
                src="/assets/img/landing/mockup-2.jpg"
                className="shadow d-block mw-100 cursor-pointer"
                onClick={() => console.log("Clicked")}
              />
              <div className="text-center my-3 text-body fw-bold">
                داشبورد رستوران
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <img
                src="/assets/img/landing/mockup-3.jpg"
                className="shadow d-block mw-100 cursor-pointer"
                onClick={() => console.log("Clicked")}
              />

              <div className="text-center my-3 text-body fw-bold">
                داشبورد فرآیندها
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <img
                src="/assets/img/landing/mockup-4.jpg"
                className="shadow d-block mw-100 cursor-pointer"
                onClick={() => console.log("Clicked")}
              />

              <div className="text-center my-3 text-body fw-bold">
                داشبورد شبکه
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <img
                src="/assets/img/landing/mockup-5.jpg"
                className="shadow d-block mw-100 cursor-pointer"
                onClick={() => console.log("Clicked")}
              />

              <div className="text-center my-3 text-body fw-bold">
                داشبورد پرسنلی
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="footer"
        className="py-5 bg-gray-900 bg-opacity-75 text-body text-opacity-75"
        data-bs-theme="dark"
      >
        <div className="container-xxl px-3 px-lg-5">
          <div className="row">
            <div className="col-sm-6 mb-3 mb-lg-0">
              <a
                // href="https://www.linkedin.com/in/mohammad-reza-b-7a2099123/"
                className="footer-copyright-text text-decoration-none"
              >
                &copy; ساخته شده توسط محمدرضا بابایی یزدلی
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
