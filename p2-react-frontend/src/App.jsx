import {NavSidebar} from './components/NavSidebar';
import {BrowserRouter, Routes, Route, Link, useLocation} from 'react-router-dom';
import { AddOrder, CurrentOrders, ManageMenu, OrdersLog } from './components';
import './App.css';

function App() {
    return (
        <div className="row">
            <BrowserRouter>
                <NavSidebar location={useLocation}>
                    <Link to="/add" className='nav-link link-dark'> Add Orders</Link>
                    <Link to="/current" className='nav-link link-dark'> Current Orders</Link>
                    <Link to="/menu" className='nav-link link-dark'> Manage Menu</Link>
                    <Link to="/log" className='nav-link link-dark'> Orders Log</Link>
                </NavSidebar>

                <Routes>
                    <Route path='/' element={<AddOrder />}></Route>
                    <Route path='/add' element={<AddOrder />}></Route>
                    <Route path='/current' element={<CurrentOrders />}></Route>
                    <Route path='/menu' element={<ManageMenu />}></Route>
                    <Route path='/log' element={<OrdersLog />}></Route>
                    <Route path='/*' element={<AddOrder />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
