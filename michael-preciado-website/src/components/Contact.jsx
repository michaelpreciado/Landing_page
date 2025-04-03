import React, { useState } from 'react';

// Use CSS classes for styling
const InputField = ({ label, type, name, placeholder, value, onChange }) => (
  <div className="form-group"> {/* Use form-group class */}
    <label htmlFor={name}>{label}</label> {/* Label style handled by CSS */}
    <input
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
      className="form-input" // Use form-input class
      // Removed inline style
    />
  </div>
);

// Use CSS classes for styling
const TextAreaField = ({ label, name, placeholder, value, onChange }) => (
  <div className="form-group"> {/* Use form-group class */}
    <label htmlFor={name}>{label}</label> {/* Label style handled by CSS */}
    <textarea
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
      rows="5"
      className="form-textarea" // Use form-textarea class
      // Removed inline style
    />
  </div>
);

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to an API)
    console.log('Form data submitted:', formData);
    alert('Message sent! (Placeholder)'); // Placeholder confirmation
    setFormData({ name: '', email: '', message: '' }); // Clear form
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      {/* Use contact-form class */}
      <form onSubmit={handleSubmit} className="contact-form">
        <InputField
          label="Name"
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />
        <InputField
          label="Email"
          type="email"
          name="email"
          placeholder="Enter your email addr"
          value={formData.email}
          onChange={handleChange}
        />
        <TextAreaField
          label="Message"
          name="message"
          placeholder="Type your message here..."
          value={formData.message}
          onChange={handleChange}
        />
        {/* Use submit-button class */}
        <button type="submit" className="submit-button">
           {/* Icon style can be handled within the button's CSS or kept inline if simple */}
          <span style={{ marginRight: '10px' }}>&#x27A4;</span> Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact; 