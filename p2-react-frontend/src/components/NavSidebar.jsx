import React from "react";
import { useLocation } from "react-router-dom";

export const NavSidebar = ({ children }) => {

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
        </ul>
      </aside>
    );
  } else {
    <></>
  }
};
