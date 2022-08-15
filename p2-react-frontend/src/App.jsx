import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  useLocation,
} from "react-router-dom";
import "./styles.css";
import "./dark.css";
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
import { useTransition, animated } from "react-spring";
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
          <div className="container col-9 p-2 col-lg-9">
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
          </div>
        </BrowserRouter>
      </OrderProvider>
    </div>
  );
}

export default App;

const AnimatedRoutes = () => {
  const location = useLocation();
  const transitions = useTransition(location, {
    config: { duration: 250 },
    from: { opacity: 0, x: -20 },
    enter: { opacity: 1, x: 0 },
    leave: { opacity: 0, x: 20 },
    exitBeforeEnter: true,
    reverse: location,
  });

  return transitions((props, item) => (
    <animated.div className="container col-9 p-2 col-lg-9" style={props}>
      <Routes location={item}>
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
    </animated.div>
    // </main>
  ));
};
