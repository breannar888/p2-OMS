import {NavSidebar} from './components/NavSidebar';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import './App.css';

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

                {/* <Routes>
                    <Route path='/' element={<Table />}></Route>
                    <Route path='/add' element={<Form />}></Route>
                    <Route path='/current' element={<Table />}></Route>
                    <Route path='/menu' element={<Error500 />}></Route>
                    <Route path='/log' element={<Error500 />}></Route>
                    <Route path='/*' element={<add />}></Route>
                </Routes> */}
            </BrowserRouter>
        </div>
    );
}

export default App;
