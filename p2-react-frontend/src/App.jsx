import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./index.css";
import {
  Login,
  AddForm,
  NavSidebar,
  OrdersLog,
  OrdersTable,
  Menu,
  ErrorPage,
  AddMenuItem,
} from "./components/";
import OrderProvider from "./context/OrderContext";
import { CookiesProvider } from "react-cookie";
import PrivateRoutes from "./components/PrivateRoutes";
import AdminRoutes from "./components/AdminRoutes";

function App() {
  return (
    <div className="row">
      <OrderProvider>
        <BrowserRouter>
          <NavSidebar>
            <NavLink to="/add" className="nav-link link-dark">
              Add Orders
            </NavLink>
            <NavLink to="/current" className="nav-link link-dark">
              Current Orders
            </NavLink>
            <NavLink
              to="/menu"
              className="nav-link link-dark"
              auth="ROLE_MANAGER"
            >
              Manage Menu
            </NavLink>
            <NavLink to="/log" className="nav-link link-dark">
              Orders Log
            </NavLink>
          </NavSidebar>

          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route path="/add" element={<AddForm />}></Route>
              <Route path="/current" element={<OrdersTable />}></Route>
              <Route element={<AdminRoutes />}>
                <Route path="/menu" element={<Menu />}></Route>
                <Route path="/menu/add" element={<AddMenuItem />}></Route>
              </Route>
              <Route path="/log" element={<OrdersLog />}></Route>
            </Route>
            <Route path="/" exact element={<Login />}></Route>
            <Route path="/*" element={<ErrorPage />}></Route>
          </Routes>
        </BrowserRouter>
      </OrderProvider>
    </div>
  );
}

export default App;
