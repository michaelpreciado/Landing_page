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
      <div className="relative z-10 text-center"> {/* Added text-center */}
        {/* Add the computer logo GIF here - Replaced with coffee mug */}
        <img 
          src="https://placehold.co/64x64/png/?text=☕" // <-- Placeholder for 8-bit coffee mug
          alt="8-bit Coffee Mug Placeholder" 
          className="mx-auto mb-4 w-16 h-16" // Example styling: center, add margin, set size
        /> 
        <p className="text-xl text-white mb-4">Have a cool idea? lets work together</p>
        {/* Added examples paragraph */}
        <p className="text-md text-gray-400 mb-6">e.g., building a web application, developing a mobile app, automating a task, or bringing your creative project to life.</p>
        <h2>Contact Me</h2>
        {/* Use contact-form class and add Netlify attributes */}
        <form name="contact" method="POST" netlify className="contact-form">
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
      </div>
    </section>
  );
}

export default Contact; 