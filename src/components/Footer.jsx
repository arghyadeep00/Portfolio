import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
function Footer() {
  return (
    <>
      <div className="flex justify-between px-5 border-t border-slate-700 text-lightGreen p-2 bg-mutedGreenBlue font-firaCode">
        <div className="flex items-center">
          <span className="px-4">find me in:</span>
          <a href="https://x.com/arghyadeep00" target="_blank" className="border-x border-slate-700 px-4 cursor-pointer">
            <FaTwitter className="text-xl" />
          </a>
          <a href="https://www.linkedin.com/in/arghyadeepshee/" target="_blank" className="px-4 border-r border-slate-700 cursor-pointer">
            <FaLinkedin  className="text-xl" />
          </a>
        </div>
        <div className="cursor-pointer border-l border-slate-700 px-4">
          <a href="https://github.com/arghyadeep00" target="_blank" className="flex  gap-2">
            @arghya00
            <FaGithub className="text-xl" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
