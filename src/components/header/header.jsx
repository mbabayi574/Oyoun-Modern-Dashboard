import React from "react";
import { Link } from "react-router-dom";
import { slideToggle } from "./../../composables/slideToggle.js";

function Header() {
  const notificationData = [
    {
      icon: "bi bi-bag text-theme",
      title: "سفارش جدید دریافتی (۱,۲۹۹ تومان)",
      time: "اکنون",
    },
    {
      icon: "bi bi-person-circle text-theme",
      title: "۳ حساب کاربری جدید ساخته شد",
      time: "۲ دقیقه قبل",
    },
    {
      icon: "bi bi-gear text-theme",
      title: "نصب کامل شد",
      time: "۳۰ دقیقه قبل",
    },
    {
      icon: "bi bi-grid text-theme",
      title: "ابزارک تلگرام فعال شد",
      time: "۳ روز قبل",
    },
    {
      icon: "bi bi-credit-card text-theme",
      title: "روش پرداختی جدید فعال شد",
      time: "۱ ماه قبل",
    },
  ];

  const toggleAppSidebarDesktop = () => {
    var elm = document.querySelector(".app");
    if (elm) {
      if (
        !(
          elm.classList.contains("app-with-top-nav") &&
          elm.classList.contains("app-without-sidebar")
        )
      ) {
        elm.classList.toggle("app-sidebar-collapsed");

        setTimeout(() => {
          window.dispatchEvent(new Event("resize"));
        }, 150);
      }
    }
  };

  const toggleAppSidebarMobile = () => {
    var elm = document.querySelector(".app");
    if (elm) {
      if (
        !(
          elm.classList.contains("app-with-top-nav") &&
          elm.classList.contains("app-without-sidebar")
        )
      ) {
        elm.classList.toggle("app-sidebar-mobile-toggled");
      } else {
        slideToggle(document.querySelector(".app-top-nav"));
      }
    }
  };

  const toggleAppHeaderSearch = () => {
    var elm = document.querySelector(".app");
    elm.classList.toggle("app-header-menu-search-toggled");
  };

  return (
    <div id="header" className="app-header">
      <div className="desktop-toggler">
        <button
          type="button"
          className="menu-toggler"
          onClick={toggleAppSidebarDesktop}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      <div className="mobile-toggler">
        <button
          type="button"
          className="menu-toggler"
          onClick={toggleAppSidebarMobile}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      <div className="brand">
        <Link to="/" className="brand-logo">
          <span className="brand-img">
            <span className="brand-img-text text-theme">ع</span>
          </span>
          <span className="brand-text">نرم‌افزار عیون</span>
        </Link>
      </div>

      <div className="menu">
        <div className="menu-item dropdown">
          <a href="#/" onClick={toggleAppHeaderSearch} className="menu-link">
            <div className="menu-icon">
              <i className="bi bi-search nav-icon"></i>
            </div>
          </a>
        </div>
        <div className="menu-item dropdown dropdown-mobile-full">
          <a
            href="#/"
            data-bs-toggle="dropdown"
            data-bs-display="static"
            className="menu-link"
          >
            <div className="menu-icon">
              <i className="bi bi-grid-3x3-gap nav-icon"></i>
            </div>
          </a>
          <div className="dropdown-menu fade dropdown-menu-start w-300px text-center p-0 mt-1">
            <div className="row row-grid gx-0">
              <div className="col-4">
                <Link
                  to="/email/inbox"
                  className="dropdown-item text-decoration-none p-3 bg-none"
                >
                  <div className="position-relative">
                    <i className="bi bi-circle-fill position-absolute text-theme top-0 mt-n2 me-n2 fs-6px d-block text-center w-100"></i>
                    <i className="bi bi-envelope h2 opacity-5 d-block my-1"></i>
                  </div>
                  <div className="fw-500 fs-10px text-inverse">صندوق ورودی</div>
                </Link>
              </div>
              <div className="col-4">
                <Link
                  to="/pos/customer-order"
                  className="dropdown-item text-decoration-none p-3 bg-none"
                >
                  <div>
                    <i className="bi bi-hdd-network h2 opacity-5 d-block my-1"></i>
                  </div>
                  <div className="fw-500 fs-10px text-inverse">دستگاه پوز</div>
                </Link>
              </div>
              <div className="col-4">
                <Link
                  to="/calendar"
                  className="dropdown-item text-decoration-none p-3 bg-none"
                >
                  <div>
                    <i className="bi bi-calendar4 h2 opacity-5 d-block my-1"></i>
                  </div>
                  <div className="fw-500 fs-10px text-inverse">تقویم</div>
                </Link>
              </div>
            </div>
            <div className="row row-grid gx-0">
              <div className="col-4">
                <Link
                  to="/helper"
                  className="dropdown-item text-decoration-none p-3 bg-none"
                >
                  <div>
                    <i className="bi bi-terminal h2 opacity-5 d-block my-1"></i>
                  </div>
                  <div className="fw-500 fs-10px text-inverse">ترمینال</div>
                </Link>
              </div>
              <div className="col-4">
                <Link
                  to="/settings"
                  className="dropdown-item text-decoration-none p-3 bg-none"
                >
                  <div className="position-relative">
                    <i className="bi bi-circle-fill position-absolute text-theme top-0 mt-n2 me-n2 fs-6px d-block text-center w-100"></i>
                    <i className="bi bi-sliders h2 opacity-5 d-block my-1"></i>
                  </div>
                  <div className="fw-500 fs-10px text-inverse">تنظیمات</div>
                </Link>
              </div>
              <div className="col-4">
                <Link
                  to="/widgets"
                  className="dropdown-item text-decoration-none p-3 bg-none"
                >
                  <div>
                    <i className="bi bi-collection-play h2 opacity-5 d-block my-1"></i>
                  </div>
                  <div className="fw-500 fs-10px text-inverse">ابزارک‌ها</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-item dropdown dropdown-mobile-full">
          <a
            href="#/"
            data-bs-toggle="dropdown"
            data-bs-display="static"
            className="menu-link"
          >
            <div className="menu-icon">
              <i className="bi bi-bell nav-icon"></i>
            </div>
            <div className="menu-badge bg-theme"></div>
          </a>
          <div className="dropdown-menu dropdown-menu-start mt-1 w-300px fs-11px pt-1">
            <h6 className="dropdown-header fs-10px mb-1 text-start">
              اطلاعیه‌ها
            </h6>
            <div className="dropdown-divider mt-1"></div>
            {notificationData.length > 0 ? (
              notificationData.map((notification, index) => (
                <a
                  href="#/"
                  key={index}
                  className="d-flex align-items-center py-10px dropdown-item text-wrap fw-semibold"
                >
                  <div className="fs-20px">
                    <i className={notification.icon}></i>
                  </div>
                  <div className="flex-1 flex-wrap ps-3 text-start">
                    <div className="mb-1 text-inverse">
                      {notification.title}
                    </div>
                    <div className="small text-inverse text-opacity-50">
                      {notification.time}
                    </div>
                  </div>
                  <div className="ps-2 fs-16px">
                    <i className="bi bi-chevron-left"></i>
                  </div>
                </a>
              ))
            ) : (
              <div className="dropdown-notification-item p-3 text-center">
                No record found
              </div>
            )}
            <hr className="mb-0 mt-2" />
            <div className="py-10px mb-n2 text-center">
              <a href="#/" className="text-decoration-none fw-bold">
                دیدن همه
              </a>
            </div>
          </div>
        </div>
        <div className="menu-item dropdown dropdown-mobile-full">
          <a
            href="#/"
            data-bs-toggle="dropdown"
            data-bs-display="static"
            className="menu-link"
          >
            <div className="menu-img online">
              <img
                src="/assets/img/user/profile.jpg"
                alt="Profile"
                height="60"
              />
            </div>
            <div className="menu-text d-sm-block d-none w-170px">
              username@account.com
            </div>
          </a>
          <div className="dropdown-menu dropdown-menu-start me-lg-3 fs-11px mt-1">
            <Link
              to="/profile"
              className="dropdown-item d-flex align-items-center"
            >
              پروفایل{" "}
              <i className="bi bi-person-circle ms-auto text-theme fs-16px my-n1"></i>
            </Link>
            <Link
              to="/email/inbox"
              className="dropdown-item d-flex align-items-center"
            >
              صندوق ورودی{" "}
              <i className="bi bi-envelope ms-auto text-theme fs-16px my-n1"></i>
            </Link>
            <Link
              to="/calendar"
              className="dropdown-item d-flex align-items-center"
            >
              تقویم{" "}
              <i className="bi bi-calendar ms-auto text-theme fs-16px my-n1"></i>
            </Link>
            <Link
              to="/settings"
              className="dropdown-item d-flex align-items-center"
            >
              تنظیمات{" "}
              <i className="bi bi-gear ms-auto text-theme fs-16px my-n1"></i>
            </Link>
            <div className="dropdown-divider"></div>
            <Link
              to="/pages/login"
              className="dropdown-item d-flex align-items-center"
            >
              خروج{" "}
              <i className="bi bi-toggle-off ms-auto text-theme fs-16px my-n1"></i>
            </Link>
          </div>
        </div>
      </div>

      <form className="menu-search" method="POST" name="header_search_form">
        <div className="menu-search-container">
          <div className="menu-search-icon">
            <i className="bi bi-search"></i>
          </div>
          <div className="menu-search-input">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="جستجو کنید"
            />
          </div>
          <div className="menu-search-icon">
            <a href="#/" onClick={toggleAppHeaderSearch}>
              <i className="bi bi-x-lg"></i>
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Header;
