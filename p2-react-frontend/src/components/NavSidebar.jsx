import React, {Children} from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { OrderState } from "../context/OrderContext";

export const NavSidebar = ({ children }) => {
  const navigate = useNavigate();
  const { cookies, setCookie, removeCookie } = OrderState();

  const logout = async () => {
    await fetch("http://localhost:8080/logout", {
      mode: "no-cors",
    }).then(() => {
      removeCookie("JSESSIONID", undefined);
      removeCookie("Authorities");
      navigate("/");
    });
  };


// ROLE_USER
// ROLE_MANAGER 

  const { pathname } = useLocation();
  if (pathname !== "/") {
    return (
      <aside className="col-3 col-lg-2">
        <div className="header">
          Order <br /> Management <br /> System
        </div>
        <ul className="nav d-block h-100">
          {Children.map(children, (child) => {
            if (child.props?.auth === "ROLE_MANAGER" && cookies.authorities !== child.props.auth ) {return <></>}
            else {return ( <li className="nav-item">{child}</li> )}
          })}
          <li className="nav-link link-dark nav-item" onClick={logout}>Logout</li>
        </ul>
      </aside>
    );
  } else {
    <></>;
  }
};
