import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs.sendForm(
      'service_njlqgyo',      // Replace with your service ID
      'template_4xrrt6n',   // Replace with your template ID
      form.current,
      "8oX-i9MFMzRObwAMi"       // Replace with your public key
    ).then(
      (result) => {
        setStatus('Message sent successfully!');
        form.current.reset();
      },
      (error) => {
        setStatus('Failed to send message. Please try again.');
      }
    );
  };

  return (
    <div className="max-w-xl mx-auto p-6 mt-10 shadow-md bg-white rounded-xl">
      <h2 className="text-3xl font-semibold text-center mb-6">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="border p-3 rounded-lg"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="border p-3 rounded-lg"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="6"
          required
          className="border p-3 rounded-lg"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold"
        >
          Send Message
        </button>
        {status && <p className="text-center text-sm mt-2">{status}</p>}
      </form>
    </div>
  );
};

export default Contact;
