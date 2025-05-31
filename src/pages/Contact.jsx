import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("");
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.current.reset();
          setLoading(false);
        },
        () => {
          setStatus("Failed to send message. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="w-full h-full px-4 py-6 md:py-10 bg-[#021e20] font-firaCode text-slate-200 overflow-y-auto">
      <div className="max-w-2xl mx-auto bg-[#072c2d] border border-slate-700 rounded-xl p-6 md:p-8 shadow-md">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-lightGreen mb-6">
          Contact Me
        </h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-5 w-full"
        >
          {/* Name */}
          <div className="relative w-full">
            <input
              type="text"
              name="user_name"
              id="user_name"
              required
              className="w-full px-4 pt-6 pb-2 bg-transparent border border-slate-600 text-white rounded-md focus:outline-none focus:border-lightGreen"
            />
            <label
              htmlFor="user_name"
              className="absolute left-4 top-2 text-sm text-slate-400 pointer-events-none"
            >
              Your Name
            </label>
          </div>

          {/* Email */}
          <div className="relative w-full">
            <input
              type="email"
              name="user_email"
              id="user_email"
              required
              className="w-full px-4 pt-6 pb-2 bg-transparent border border-slate-600 text-white rounded-md focus:outline-none focus:border-lightGreen"
            />
            <label
              htmlFor="user_email"
              className="absolute left-4 top-2 text-sm text-slate-400 pointer-events-none"
            >
              Your Email
            </label>
          </div>

          {/* Message */}
          <div className="relative w-full">
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              className="w-full px-4 pt-6 pb-2 bg-transparent border border-slate-600 text-white rounded-md focus:outline-none focus:border-lightGreen resize-none"
            ></textarea>
            <label
              htmlFor="message"
              className="absolute left-4 top-2 text-sm text-slate-400 pointer-events-none"
            >
              Your Message
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-3 bg-lightGreen hover:bg-green-500 text-black font-bold py-3 px-6 rounded-md transition duration-200 w-full sm:w-auto"
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 text-black"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                ></path>
              </svg>
            ) : (
              <>
                <FaPaperPlane /> Send Message
              </>
            )}
          </button>

          {/* Status Message */}
          {status && (
            <p
              className={`text-center text-sm ${
                status.includes("success") ? "text-green-400" : "text-red-400"
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
