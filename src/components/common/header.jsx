import { useState } from "react";
import { Link } from "react-router-dom";
import "/src/assets/styles/header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e28d594221a2f4377118b42dae850fcf4e19a74e019bf025f98a5bcb5373271?placeholderIfAbsent=true&apiKey=765253808f7647bdbf2fb4dbfdd1a5c2"
        alt="Harmony Heights Logo"
        className="logo"
      />
      <div className="hamburger" onClick={toggleMenu}>
        &#9776; 
      </div>
      <nav className={`navigation ${isMenuOpen ? 'open' : ''}`}>
        <ul className="navList">
          <li>
            <Link to="/" className="navLink">
              Home
            </Link>
          </li>
          <li>
            <Link to="/contactus" className="navLink">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="navLink">
              Gallery
            </Link>
          </li>
        </ul>
      </nav>
      <div className="subNav">
        <nav className="facilitiesNav">
        
            
            <li>
              <Link to="/BookingForm" className="facilitiesLink">
                Book Now
              </Link>
            </li>
         
        </nav>
        <div className="authButtons">
          <Link to="/signupPage">
            <button className="signUpButton">Sign Up</button>
          </Link>
          <Link to="/login">
            <button className="loginButton">Login</button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
