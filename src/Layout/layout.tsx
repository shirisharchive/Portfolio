import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="Layout">
      {/* Navbar */}

      <div className="Navbar" id="navbar">
        {/* I will keep logo */}
        <Link to="/">Logo</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact Me</Link>
      </div>

      <Outlet />
      {/* Footer */}
    </div>
  );
};
export default Layout;
