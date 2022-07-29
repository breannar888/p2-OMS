import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { AddForm, NavSidebar, OrdersLog, OrdersTable, Menu } from "./components/";
import { AddOrderPage } from "./pages/AddOrderPage";

function App() {
  return (
    <div className="row">
      <BrowserRouter>
        <NavSidebar>
          <Link to="/add" className="nav-link link-dark"> Add Orders</Link>
          <Link to="/current" className="nav-link link-dark"> Current Orders</Link>
          <Link to="/menu" className="nav-link link-dark"> Manage Menu</Link>
          <Link to="/log" className="nav-link link-dark"> Orders Log</Link>
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
