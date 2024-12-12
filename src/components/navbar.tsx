import { Outlet } from "react-router";
import "./styles.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <a href="##" className="logo-nav">
          Git Explorer
        </a>
        <div className="link-cont">
          <a href="##">Repos</a>
          <a href="##">Users</a>
        </div>
      </nav>
      <Outlet/>
    </>
  );
};

export default Navbar;
