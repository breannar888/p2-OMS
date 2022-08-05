import React from "react";
import "../index.css";

export const ErrorMessage = ({children}) => {
  return <div className="error-msg">{children}</div>;
};
