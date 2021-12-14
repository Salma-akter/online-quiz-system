import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

const Header = () => {
  return (
    <>
    <Navigation/>
    <div className="header">
      <Link to="/" className="title">
       Online Quiz System
      </Link>
      <hr className="divider" />
    </div>
    </>
  );
};

export default Header;
