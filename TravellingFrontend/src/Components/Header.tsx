import "../styles/components/header.scss";
import logo from "../assets/Home/logo.png";
import "../styles/home-page.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <a href="#"><img alt="logo" style={{ width: 60, height: 65 }} src={logo}></img></a>
      </div>
      <ul className="header-items">
        <li className="header-item">
          <a>Home</a>
        </li>
        <li className="header-item">
          <a>About Us</a>
        </li>
        <li className="header-item">
          <a>Tour Packages</a>
        </li>
        <li className="header-item">
          <a>Contact Us</a>
        </li>
      </ul>

      <div className="buttons-block">
        <button className="button-white">Login</button>
        <button className="button-orange">Sign Up</button>
      </div>
    </div>
  );
};

export default Header;
