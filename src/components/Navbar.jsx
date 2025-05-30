import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 md:px-8 py-3 border-b border-slate-700 bg-mutedGreenBlue font-firaCode">
        {/* Left Section */}
        <div className="flex flex-col md:flex-row md:items-center w-full md:w-auto gap-4 md:gap-52">
          <p className="text-lightGreen text-lg md:text-base">arghya_</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "px-4 text-white border-x border-slate-700"
                  : "px-4 text-slate-400 border-x border-slate-700"
              }
            >
              _hello
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "px-4 text-white" : "px-4 text-slate-400"
              }
            >
              _about-me
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "px-4 text-white border-x-2 border-slate-700"
                  : "px-4 text-slate-400 border-x border-slate-700"
              }
            >
              _projects
            </NavLink>
          </div>
        </div>

        {/* Right Section */}
        <div className="mt-3 md:mt-0 text-lightGreen border-t md:border-t-0 md:border-l border-slate-700 pt-2 md:pt-0 md:px-4 w-full md:w-auto text-center md:text-left">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "px-4 text-white border-x-2 border-slate-700"
                : "px-4 text-slate-400 border-x border-slate-700"
            }
          >
            _contact-me
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;
