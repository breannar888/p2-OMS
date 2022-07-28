export const NavSidebar = () => {
    return (
        <aside className="col-3">
            <div className="header">Order <br /> Management <br /> System</div>
            <ul className="nav d-block h-100">
                <li className="nav-item">
                    <a href="add_order.html" className="nav-link active" aria-current="page">
                        Add Orders
                    </a>
                </li>
                <li>
                    <a href="current_orders.html" className="nav-link link-dark">
                        Current Orders
                    </a>
                </li>
                <li>
                    <a href="manage_menu.html" className="nav-link link-dark">
                        Manage Menu
                    </a>
                </li>
                <li>
                    <a href="orders_log.html" className="nav-link link-dark">
                        Orders Log
                    </a>
                </li>
            </ul>
        </aside>
    )
}