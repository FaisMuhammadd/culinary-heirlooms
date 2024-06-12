import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={assets.logo} alt="logo" className="logo" />
      <img src={assets.profile_image} alt="logo" className="logo" />
    </div>
  );
};

export default Navbar;
