import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 md:px-8 py-3 border-t border-slate-700 text-lightGreen bg-mutedGreenBlue font-firaCode gap-3">
        {/* Social Icons */}
        <div className="flex items-center flex-wrap justify-center md:justify-start">
          <span className="px-2 md:px-4 text-sm sm:text-base">find me in:</span>
          <a
            href="https://x.com/arghyadeep00"
            target="_blank"
            rel="noopener noreferrer"
            className="border-x border-slate-700 px-3 sm:px-4 cursor-pointer"
          >
            <FaTwitter className="text-xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/arghyadeepshee/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 sm:px-4 border-r border-slate-700 cursor-pointer"
          >
            <FaLinkedin className="text-xl" />
          </a>
        </div>

        {/* GitHub Link */}
        <div className="cursor-pointer border-t md:border-t-0 md:border-l border-slate-700 pt-2 md:pt-0 md:px-4 text-center">
          <a
            href="https://github.com/arghyadeep00"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-2"
          >
            @arghya00
            <FaGithub className="text-xl" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
