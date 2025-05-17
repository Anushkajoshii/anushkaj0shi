import React, { useState } from "react";
import "../styles/contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [loading, setLoading] = useState(false);  // State to track the loading status
  const [status, setStatus] = useState("");  // State for status messages

  // Handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);  // Start loading when the form is being submitted
    setStatus("");  // Reset status message on new submission
    
    // Send email using EmailJS
    emailjs
      .sendForm("anushkaportfolio", "anushka_template", e.target, "Ypu8UgvDQkY7KgJ28")
      .then(
        (result) => {
          console.log("Message sent successfully:", result.text);
          setFormData({ name: "", email: "", message: "" });  // Reset form data
          setLoading(false);  // Stop loading after successful submission
          setStatus("Message sent successfully!");  // Set success message
        },
        (error) => {
          console.error("Error sending message:", error.text);
          setLoading(false);  // Stop loading after error
          setStatus("Failed to send message. Please try again later.");  // Set error message
        }
      );
  };

  return (
    <div className="contact-container">
      <h2 className="contact-subtitle">Get in touch</h2>
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        
        <label>Email*</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        
        <label>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        
        <button type="submit" className="send-button" disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </button>
      </form>

      {status && <p className="status-message">{status}</p>}

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
          <a href="https://medium.com/@anushkaj0shi" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5968/5968906.png"
            alt="Medium"
            className="social-icon"
          />
          </a>

          <a href="https://www.kaggle.com/anushkajoshii" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Kaggle_logo.png"
              alt="Kaggle"
              className="social-icon"
            />
          </a>

        </div>
      </div>
    </div>
  );
};

export default Contact;
