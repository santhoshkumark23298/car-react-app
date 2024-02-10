import { NavLink } from "react-router-dom";
import "../App.css";

const Header = () => {
  return (
    <div className="nav">
      <h1>Car's</h1>
      <div className="nav_list">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cars">Cars</NavLink>
      </div>
    </div>
  );
};

export default Header;
