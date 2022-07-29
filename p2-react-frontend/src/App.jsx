import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import {
  AddForm,
  NavSidebar,
  OrdersLog,
  OrdersTable,
  Menu,
} from "./components/";
import OrderProvider from "./context/OrderContext";

function App() {
  return (
    <div className="row">
        <BrowserRouter>
          <NavSidebar>
            <Link to="/add"> Add Orders</Link>
            <Link to="/current"> Current Orders</Link>
            <Link to="/menu"> Manage Menu</Link>
            <Link to="/log"> Orders Log</Link>
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
