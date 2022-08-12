import React, { Children, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { OrderState } from "../context/OrderContext";

import useDarkMode from "use-dark-mode";

export const NavSidebar = ({ children }) => {
  const darkMode = useDarkMode(false);
  const navigate = useNavigate();
  const { cookies, setCookie, removeCookie } = OrderState();
  const [isOpen, setIsOpen] = useState(false);

  const logout = async () => {
    await fetch("http://localhost:8080/logout", {
      mode: "no-cors",
    }).then(() => {
      setCookie("JSESSION", undefined);
      removeCookie("authorities");
      navigate("/");
    });
  };

  const showMobile = () => {
    setIsOpen(!isOpen);
  };

  const closeMobile = () => {
    setIsOpen(!isOpen);
  };

  const { pathname } = useLocation();
  if (pathname !== "/") {
    return (
      <>
        <button className="nav-btn" onClick={showMobile}>
          <i className="material-symbols-outlined menu">menu</i>
        </button>
        <aside
          className={
            isOpen
              ? "col-6 col-lg-2 col-sm-4 col-md-3 openMobile"
              : "col-6 col-lg-2 col-sm-4 col-md-3 nav-menu"
          }
        >
          <div id="header">
            Order <br /> Management <br /> System
          </div>
          <div id="colorToggle">
            <span onClick={darkMode.toggle}>
              {darkMode.value ? (
                <>
                  Set light mode{" "}
                  <i className="material-symbols-outlined">light_mode</i>
                </>
              ) : (
                <>
                  Set dark mode{" "}
                  <i className="material-symbols-outlined">dark_mode</i>
                </>
              )}
            </span>
          </div>
          <ul className="nav d-block h-100" id="nav">
            {Children.map(children, (child) => {
              if (
                child.props?.auth === "ROLE_MANAGER" &&
                cookies.authorities !== child.props.auth
              ) {
                return <></>;
              } else {
                return (
                  <li className="nav-item" onClick={closeMobile}>
                    {child}
                  </li>
                );
              }
            })}
            <li className="nav-link link-dark nav-item" onClick={logout}>
              Logout
            </li>
          </ul>
        </aside>
      </>
    );
  } else {
    return (
      <div id="colorToggle" className="loginToggle">
        {console.log("logged out")}
        <span onClick={darkMode.toggle}>
          {darkMode.value ? (
            <>
              Set light mode
              <i className="material-symbols-outlined">light_mode</i>
            </>
          ) : (
            <>
              Set dark mode
              <i className="material-symbols-outlined">dark_mode</i>
            </>
          )}
        </span>
      </div>
    );
  }
};