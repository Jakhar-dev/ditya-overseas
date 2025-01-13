import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccessMessage('');
    setErrorMessage('');

    // Set loading state
    setIsLoading(true);

    // Send email using EmailJS
    emailjs
      .sendForm(
        'service_1j4v2jl', // Your EmailJS Service ID
        'template_xnj8wbn', // Your EmailJS Template ID
        e.target, // The form element
        'gvEpu38M4LesPBklb' // Your EmailJS User ID (API key)
      )
      .then(
        (result) => {
          alert('Message Sent');
        },
        (error) => {
          alert('Failed to send message. Please try again later.');
        }
      );

      setIsLoading(false);

    // Clear form data
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="contact-section">
      <div className="contact-content">
        <h2>Contact Us</h2>

        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
           {/* Loading State */}
           {isLoading ? (
            <button type="submit" className="submit-btn" disabled>
              Sending...
            </button>
          ) : (
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
