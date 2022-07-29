export const NavSidebar = ({ children }) => {
  return (
    <aside className="col-3">
      <div className="header">
        Order <br /> Management <br /> System
      </div>
      <ul className="nav d-block h-100">
        <li className="nav-item">{children}</li>
      </ul>
    </aside>
  );
};
