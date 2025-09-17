import React, { useEffect } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import SidebarNav from "./sidebar-nav.jsx";

function Sidebar() {
  useEffect(() => {
    document.querySelector("body").classList.add("app-init");
  }, []);

  const toggleAppSidebarMobile = () => {
    var elm = document.querySelector(".app");
    elm.classList.toggle("app-sidebar-mobile-toggled");
  };

  return (
    <React.Fragment>
      <div id="sidebar" className="app-sidebar">
        <PerfectScrollbar
          className="app-sidebar-content"
          options={{ suppressScrollX: true }}
        >
          <SidebarNav />
        </PerfectScrollbar>
      </div>
      <button
        className="app-sidebar-mobile-backdrop"
        onClick={toggleAppSidebarMobile}
      ></button>
    </React.Fragment>
  );
}

export default Sidebar;
