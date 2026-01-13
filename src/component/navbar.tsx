import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar" id="navbar">
      <Link to="/" className="logo">
        My Portfolio
      </Link>
      <Link to="/" className="home-link">
        Home
      </Link>
      <Link to="/" className="about-link">
        About Me
      </Link>
      <Link to="/contact" className="contact-link">
        Contact Me
      </Link>
    </div>
  );
};
export default Navbar;
