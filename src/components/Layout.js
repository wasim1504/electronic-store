import { Outlet, Link, useLocation } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <nav className="layout">
        <div className="project-name">WELCOME TO ELECTRONIC STORE</div>
        <div className="navigation-links">
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
          <Link
            to="/mobile"
            className={location.pathname === "/mobile" ? "active" : ""}
          >
            Mobile
          </Link>
          <Link
            to="/laptop"
            className={location.pathname === "/laptop" ? "active" : ""}
          >
            Laptop
          </Link>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
          >
            Contact
          </Link>

          <Link
            to="/user"
            className={location.pathname === "/user" ? "active" : ""}
          >
            User
          </Link>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
