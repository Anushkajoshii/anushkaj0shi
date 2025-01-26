import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-subtitle">get in touch</h2>
      
      <form className="contact-form">
        <label>Name</label>
        <input type="text" name="name" />
        
        <label>Email*</label>
        <input type="email" name="email" required />
        
        <label>Message</label>
        <textarea name="message"></textarea>
        
        <button type="submit" className="send-button">Send</button>
      </form>

      {/* <p className="contact-note">
        This site is protected by reCAPTCHA and the Google{" "}
        <a href="#">Privacy Policy</a> and{" "}
        <a href="#">Terms of Service</a> apply.
      </p> */}

      <div className="contact-footer">
        <h3>Questions or Comments?</h3>
        <p>
          You can send me a message or ask me a general question using this form. 
          <br />
          I will do my best to get back to you soon!
        </p>
      </div>

      <div className="connect-section">
  <h3>Connect With Me</h3>
  
  <div className="social-icons">
    <a href="https://www.linkedin.com/in/joshi-anushka/" target="_blank" rel="noopener noreferrer">
      <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" className="social-icon" />
    </a>

    <a href="https://github.com/Anushkajoshii" target="_blank" rel="noopener noreferrer">
      <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" className="social-icon" />
    </a>

    <a href="mailto:anushkajoshi020503@gmail.com">
      <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" alt="Email" className="social-icon" />
    </a>

    <a href="https://leetcode.com/u/anushkajoshi_/" target="_blank" rel="noopener noreferrer">
      <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode" className="social-icon" />
    </a>
  </div>
</div>

    </div>
  );
};

export default Contact;


