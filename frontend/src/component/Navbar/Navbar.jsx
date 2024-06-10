import { useState } from "react";
import { assets } from "../../assets/assets";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <img src={assets.logo} alt="logo" className="logo" />
      <ul className="navbar-menu">
        <li className={menu === "home" ? "active" : ""}>home</li>
        <li className={menu === "menu" ? "active" : ""}>menu</li>
        <li className={menu === "mobile-app" ? "active" : ""}>mobile-app</li>
        <li className={menu === "contact-us" ? "active" : ""}>contact us</li>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="search" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="basket icon" />
          <div className="dot"></div>
        </div>
      </div>

      <button>sign in</button>
    </div>
  );
};

export default Navbar;
