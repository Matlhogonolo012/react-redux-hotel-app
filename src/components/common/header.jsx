import '/src/assets/styles/header.css'; 

 import { Link } from 'react-router-dom'; 

 
 function Header() {
   return (
     <header className="header">
       <img 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e28d594221a2f4377118b42dae850fcf4e19a74e019bf025f98a5bcb5373271?placeholderIfAbsent=true&apiKey=765253808f7647bdbf2fb4dbfdd1a5c2" 
            
         alt="Harmony Heights Logo" 
         className="logo" 
       />
       <nav className="navigation">
         <ul className="navList">
           <li><Link to="/" className="navLink">Home</Link></li>
           <li><Link to="/contact" className="navLink">Contact Us</Link></li>
           <li><Link to="/about" className="navLink">About</Link></li>
         </ul>
       </nav>
       <div className="subNav">
         <nav className="facilitiesNav">
           <ul className="facilitiesList">
             <li><Link to="/facilities" className="facilitiesLink">Facilities</Link></li>
             <li><Link to="/BookingForm" className="facilitiesLink">Book Now</Link></li>
           </ul>
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
 