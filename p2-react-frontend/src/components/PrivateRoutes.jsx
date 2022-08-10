import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { OrderState } from "../context/OrderContext";

const PrivateRoutes = () => {
  const { cookies } = OrderState();

  return cookies.JSESSIONID ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
