import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <p>© 2024 My Portfolio. All rights reserved.</p>

      <Link to="/">About Me</Link>
      <a href="https://github.com/shirisharchive">My Project</a>
    </div>
  );
};
export default Footer;
