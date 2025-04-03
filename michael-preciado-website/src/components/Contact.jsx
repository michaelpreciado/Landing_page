import React from 'react';

// Use CSS classes for styling
const InputField = ({ label, type, name, placeholder }) => (
  <div className="form-group"> {/* Use form-group class */}
    <label htmlFor={name}>{label}</label> {/* Label style handled by CSS */}
    <input
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      required
      className="form-input" // Use form-input class
    />
  </div>
);

// Use CSS classes for styling
const TextAreaField = ({ label, name, placeholder }) => (
  <div className="form-group"> {/* Use form-group class */}
    <label htmlFor={name}>{label}</label> {/* Label style handled by CSS */}
    <textarea
      id={name}
      name={name}
      placeholder={placeholder}
      required
      rows="5"
      className="form-textarea" // Use form-textarea class
    />
  </div>
);

function Contact() {
  // Removed useState and related handlers (handleChange, handleSubmit)
  // Netlify will handle the form submission

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      {/* Use contact-form class and add Netlify attributes */}
      <form name="contact" method="POST" data-netlify="true" className="contact-form">
        {/* Required hidden field for Netlify */}
        <input type="hidden" name="form-name" value="contact" />
        <InputField
          label="Name"
          type="text"
          name="name"
          placeholder="Enter your name"
        />
        <InputField
          label="Email"
          type="email"
          name="email"
          placeholder="Enter your email addr"
        />
        <TextAreaField
          label="Message"
          name="message"
          placeholder="Type your message here..."
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