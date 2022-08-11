import React, { Children } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { OrderState } from "../context/OrderContext";


import useDarkMode from 'use-dark-mode';


export const NavSidebar = ({ children }) => {
  const darkMode = useDarkMode(false);
  const navigate = useNavigate();
  const { cookies, setCookie, removeCookie } = OrderState();

  const logout = async () => {
    await fetch("http://localhost:8080/logout", {
      mode: "no-cors",
    }).then(() => {
      setCookie("JSESSION", undefined);
      removeCookie("authorities");
      navigate("/");
    });
  };

  const { pathname } = useLocation();
  if (pathname !== "/") {
    return (
      <aside className="col-3 col-lg-2">
        <div id="header">
          Order <br /> Management <br /> System
        </div>
        <div id="colorToggle">
          {console.log(darkMode.value)}
          <span onClick={darkMode.toggle}>
            {darkMode.value ?
              (<>Set light mode <i className="material-symbols-outlined">light_mode</i></>) :
              (<>Set dark mode <i className="material-symbols-outlined">dark_mode</i></>)
            }
          </span>
        </div>
        <ul className="nav d-block h-100" id="nav">
          {Children.map(children, (child) => {
            if (child.props?.auth === "ROLE_MANAGER" && cookies.authorities !== child.props.auth) { return <></> }
            else { return (<li className="nav-item">{child}</li>) }
          })}
          <li className="nav-link link-dark nav-item" onClick={logout}>Logout</li>
        </ul>
      </aside>
    );
  } else {
    return (
        <div id="colorToggle" className="loginToggle">
          {console.log("logged out")}
          <span onClick={darkMode.toggle}>
            {darkMode.value ?
              (<>Set light mode <i className="material-symbols-outlined">light_mode</i></>) :
              (<>Set dark mode <i className="material-symbols-outlined">dark_mode</i></>)
            }
          </span>
        </div>
    )
  }
};
