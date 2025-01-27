import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="flex justify-between px-8 p-2 border-b border-slate-700 bg-mutedGreenBlue font-firaCode">
        <div className="flex gap-52">
          <p className="text-lightGreen">arghya_</p>
          <div className="flex">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "border-x border-slate-700 px-4 text-white"
                  : "border-x border-slate-700 px-4 text-slate-400"
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
                  : "px-4 border-x border-slate-700 text-slate-400"
              }
            >
              _projects
            </NavLink>
          </div>
        </div>

        <div className="text-lightGreen border-l border-slate-700 px-4">
          <a href="mailto:arghyadeepshee00@gmail.com">_contact-me</a>
        </div>
      </div>
    </>
  );
}
// "px-4 text-slate-400"
export default Navbar;
