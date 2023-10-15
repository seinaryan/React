import React from "react";

const Contact = () => {
  return (
    <div className="bg-blue-200 p-8">
      <h1 className="text-2xl font-bold mb-4">Contact Me</h1>
      <p className="mb-4">Please don't hesitate to drop me a message, and let's work together on your project.</p>
      <div className="contact-form">
        <input
          className="block w-full rounded p-2 my-2 border border-blue-500"
          type="text"
          placeholder="Your Name"
        />
        <input
          className="block w-full rounded p-2 my-2 border border-blue-500"
          type="email"
          placeholder="Your Email"
        />
        <textarea
          className="block w-full rounded p-2 my-2 border border-blue-500"
          placeholder="Your Message"
        ></textarea>
        <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
          Send Message
        </button>
      </div>
      <div className="contact-details mt-4">
        <p className="text-gray-600">You can also reach me at:</p>
        <p className="text-blue-500">contact@yourwebsite.com</p>
        <p className="text-blue-500">+91 7989564516</p>
      </div>
    </div>
  );
};

export default Contact;
