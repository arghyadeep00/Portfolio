import React, { useState } from "react";

import { IoTerminal } from "react-icons/io5";
import { FaAngleDown, FaFolderOpen } from "react-icons/fa6";
import { IoGitBranchOutline } from "react-icons/io5";
import { FaFolder } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { FaSchool } from "react-icons/fa6";
import { IoIosSchool } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { IoCodeSlashSharp } from "react-icons/io5";
import { FaChild } from "react-icons/fa";
import College from "../personal_info/College";
import School from "../personal_info/School";
import Skill from "../personal_info/Skill";
import Bio from "../personal_info/Bio";
function Projects() {
  const [open, setOpen] = useState("block");
  const folderBtnOnClick = () => {
    open == "block" ? setOpen("hidden") : setOpen("block");
  };
  const [education, setEducation] = useState("hidden");
  const educationBtnOnClick = () => {
    education == "hidden" ? setEducation("block") : setEducation("hidden");
  };
  return (
    <>
      <div className="h-full bg-mutedGreenBlue font-firaCode">
        <div className="flex h-full">
          <div className="h-full w-1/4 border-r border-slate-700 flex">
            {/* left folder structure */}
            <div className="h-full w-14 border-r border-slate-700 flex flex-col items-center">
              <div className="mt-10 flex flex-col text-2xl  gap-8">
                <FaFolderOpen className="cursor-pointer text-lightGreen" />
                <IoTerminal className="cursor-pointer text-darkGreen" />
                <IoGitBranchOutline className="cursor-pointer text-darkGreen" />
              </div>
            </div>
            <div className="w-full">
              <div>
                <div
                  className="border-b border-slate-700 flex items-center justify-start px-5 text-slate-200 cursor-pointer select-none"
                  onClick={folderBtnOnClick}
                >
                  {open == "block" ? <FaAngleDown /> : <FaAngleRight />}&nbsp;
                  projects
                </div>
                <div
                  className={`${open} flex flex-col p-5 gap-3  text-slate-400 select-none`}
                >
                  <div className="education-section">
                    <span
                      className="flex items-center gap-2 cursor-pointer"
                      onClick={educationBtnOnClick}
                    >
                      {education == "block" ? (
                        <FaAngleDown />
                      ) : (
                        <FaAngleRight />
                      )}
                      {education == "block" ? (
                        <FaFolderOpen className="text-orange-600" />
                      ) : (
                        <FaFolder className="text-orange-600" />
                      )}
                      frontend
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full w-full border-r border-slate-700 bg-[#021e20a8] text-slate-300 select-none">
            <div className="titlebar border-b border-slate-700 h-7 flex text-slate-400"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
