import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
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



function App() {

  //add in permissions based on authorities 
  //only manager can view Manage Menu link

  return (
    <div className="row">
      <CookiesProvider>
        <OrderProvider>
          <BrowserRouter>
            <NavSidebar>
              <NavLink to="/add" className="nav-link link-dark">
                Add Orders
              </NavLink>
              <NavLink to="/current" className="nav-link link-dark">
                Current Orders
              </NavLink>
              <NavLink to="/menu" className="nav-link link-dark">
                Manage Menu
              </NavLink>
              <NavLink to="/log" className="nav-link link-dark">
                Orders Log
              </NavLink>
            </NavSidebar>

 
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/add" element={<AddForm />} />
                <Route path="/current" element={<OrdersTable />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/menu/add" element={<AddMenuItem />} />
                <Route path="/log" element={<OrdersLog />} />
                <Route path="/*" element={<ErrorPage />} />
              </Routes>


          </BrowserRouter>
        </OrderProvider>
      </CookiesProvider>
    </div>
  );
}

export default App;
