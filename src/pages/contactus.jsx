
import "/src/assets/styles/contactus.css"; 
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div >
         <Link to="/" className="back-link">
      <IoMdArrowRoundBack />
    </Link>
        <div className="contact-us-container">

                 <h1 className="contact-us-title">Contact Us</h1>
      <p className="contact-us-description">
        If you have any questions, feel free to reach out to us using the form below or contact us directly.
      </p>

      <div className="contact-info">
        <h2 className="info-title">Get in Touch</h2>
        <p className="info-item"><strong>Email:</strong> harmonyheights@gmail.com</p>
        <p className="info-item"><strong>Phone:</strong> (+27) 368-4688</p>
        <p className="info-item"><strong>Address:</strong> Ga-Rankuwa Arts & Crafts Center, South Africa</p>
      </div>

      <form className="contact-form">
        <h2 className="form-title">Send Us a Message</h2>
        <input
          type="text"
          className="form-input"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          className="form-input"
          placeholder="Your Email"
          required
        />
        <textarea
          className="form-textarea"
          placeholder="Your Message"
          rows="5"
          required
        />
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div> 
        </div>
       


  );
};

export default ContactUs;
