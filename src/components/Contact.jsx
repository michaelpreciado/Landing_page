import React from 'react';
import InputField from './InputField';
import TextAreaField from './TextAreaField';

function Contact() {
  return (
    <section id="contact">
      <div className="relative z-10 text-center">
        <img 
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' style='shape-rendering: crispEdges'%3E%3Cpath fill='%231E90FF' d='M8 8h16v12H8zM6 10h2v8H6zM24 10h2v8h-2zM10 20h12v2H10z'/%3E%3Cpath fill='%23ffffff' d='M12 12h8v4h-8z' opacity='0.3'/%3E%3C/svg%3E"
          alt="8-bit Coffee Cup"
          className="mx-auto mb-4 w-16 h-16"
        />
        <p className="text-xl text-white mb-4">Have a cool idea? lets work together</p>
        <p className="text-md text-gray-400 mb-6">e.g., building a web application, developing a mobile app, automating a task, or bringing your creative project to life.</p>
        <h2>Contact Me</h2>
        <form name="contact" method="POST" data-netlify="true" action="/success" className="contact-form">
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
          <button type="submit" className="submit-button">
            <span style={{ marginRight: '10px' }}>&#x27A4;</span> Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact; 