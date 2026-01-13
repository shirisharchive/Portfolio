import { Outlet } from "react-router-dom";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import "./layout.css";

const Layout = () => {
  return (
    <div className="layout" id="layout">
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
};
export default Layout;
