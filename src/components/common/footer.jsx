import { Link } from 'react-router-dom';
import '/src/assets/styles/footer.css'; 
import { MdAttachEmail } from "react-icons/md";
function Footer() {
  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="footerLogo">
          <img 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e28d594221a2f4377118b42dae850fcf4e19a74e019bf025f98a5bcb5373271?placeholderIfAbsent=true&apiKey=765253808f7647bdbf2fb4dbfdd1a5c2" 
            alt="Harmony Heights Logo" 
            className="logo" 
          />
        </div>
        <nav className="footerNav">
          <div className="navColumn">
            <h3 className="navTitle">Product</h3>
            <ul className="navList">
              
            </ul>
          </div>
          <div className="navColumn">
            <h3 className="navTitle">Harmony Heights</h3>
            <ul className="navList">
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/bookingform">Book Now</Link></li>
            </ul>
          </div>
        </nav>
        <div className="newsletter">
          <h3 className="newsletterTitle">Subscribe to our newsletter</h3>
          <p className="newsletterDescription">For product announcements and exclusive insights</p>
          <form className="subscribeForm">
            <label htmlFor="emailInput" className="visuallyHidden">Enter your email</label>
            <div className="inputWrapper">
            <MdAttachEmail />
              
              <input 
                type="email" 
                id="emailInput" 
                placeholder="Input your email" 
                className="emailInput" 
              />
            </div>
            <button type="submit" className="subscribeButton">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footerBottom">
        <p className="copyright">© 2024 Harmony Heights • <Link to= '/privacy-policy'> Privacy </Link>• <Link to = '/termsandconditions'>Terms </Link> •</p>
        <div className="socialLinks">
          <a href="#" aria-label="Facebook">
            <img 
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c07cf0b1a4990e56087baa2165442c5d09500b48b2842a38d2761cdfab1ec08?placeholderIfAbsent=true&apiKey=765253808f7647bdbf2fb4dbfdd1a5c2" 
              alt="" 
              className="socialIcon" 
            />
          </a>
          <a href="#" aria-label="Twitter">
            <img 
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/823a856bd4074b02a221ee2e6209aed6258abd39e83abd4e122cbff05c5e2c2a?placeholderIfAbsent=true&apiKey=765253808f7647bdbf2fb4dbfdd1a5c2" 
              alt="" 
              className="socialIcon" 
            />
          </a>
          <a href="#" aria-label="Instagram">
            <img 
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf24f15109b2c79ebd7b4df91e4e3a1a4b138cd6dc00df0465da06059b748742?placeholderIfAbsent=true&apiKey=765253808f7647bdbf2fb4dbfdd1a5c2" 
              alt="" 
              className="socialIcon" 
            />
          </a>
          <a href="#" aria-label="LinkedIn">
            <img 
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/65aa6b892e47b3feed4e6e559de57472e3da8984eec9d53e8f3ff7a451535766?placeholderIfAbsent=true&apiKey=765253808f7647bdbf2fb4dbfdd1a5c2" 
              alt="" 
              className="socialIcon" 
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
