import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import { AddForm, NavSidebar, OrdersLog, OrdersTable, Menu } from "./components/";
import { AddOrderPage } from "./pages/AddOrderPage";

function App() {
  return (
    <div className="row">
      <BrowserRouter>
        <NavSidebar>
          <NavLink to="/add" className="nav-link link-dark"> Add Orders</NavLink>
          <NavLink to="/current" className="nav-link link-dark"> Current Orders</NavLink>
          <NavLink to="/menu" className="nav-link link-dark"> Manage Menu</NavLink>
          <NavLink to="/log" className="nav-link link-dark"> Orders Log</NavLink>
        </NavSidebar>
        <Routes>
          <Route path="/" element={<AddForm />}></Route>
          <Route path="/add" element={<AddForm />}></Route>
          <Route path="/current" element={<OrdersTable />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/log" element={<OrdersLog />}></Route>
          <Route path="/*" element={<AddForm />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
