import { Link } from "react-router-dom";
import "./css/navbar.css";

const NavBar = ({ hm, pr, ab, ct }) => {
  return (
    <>
      <div className="nav-bar">
        <div className="navbar-ctn">
          <div className={hm}>
            <Link to="/" className="nav-links">
              <p className="navtext ">Home</p>
            </Link>
          </div>
          <div className={pr}>
            <Link to="/projects" className="nav-links">
              <p className="navtext">Projects</p>
            </Link>
          </div>
          <div className={ab}>
            <Link to="/about" className="nav-links">
              <p className="navtext am">About Me</p>
            </Link>
          </div>
          <div className={ct}>
            <Link to="/contact" className="nav-links">
              <p className="navtext cm">Contact Me</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
