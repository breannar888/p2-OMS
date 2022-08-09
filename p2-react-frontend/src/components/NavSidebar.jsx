import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { setCookie } from "react-use-cookie";

export const NavSidebar = ({ children }) => {
  const navigate = useNavigate();

  const logout = async () => {
    await fetch("http://localhost:8080/logout", {
      mode: "no-cors",
    }).then(() => {
      setCookie("JSESSIONID", undefined);
      navigate("/");
    });
  };

  const { pathname } = useLocation();
  if (pathname !== "/") {
    return (
      <aside className="col-3 col-lg-2">
        <div className="header">
          Order <br /> Management <br /> System
        </div>
        <ul className="nav d-block h-100">
          {React.Children.map(children, (child) => (
            <li className="nav-item">{child}</li>
          ))}
          <button onClick={logout}>Logout</button>
        </ul>
      </aside>
    );
  } else {
    <></>;
  }
};
