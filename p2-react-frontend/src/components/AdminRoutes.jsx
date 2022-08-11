import React from 'react'
import { Navigate, Outlet } from "react-router-dom";
import { OrderState } from "../context/OrderContext";

const AdminRoutes = () => {
    const { cookies } = OrderState();
    console.log(cookies.authorities);
    const auth = cookies.authorities;

    return auth === 'ROLE_MANAGER' ? <Outlet /> : <Navigate to="/add" />;
}

export default AdminRoutes