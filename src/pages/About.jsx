import React, { useState } from "react";
import {
  IoTerminal,
  IoGitBranchOutline,
  IoCodeSlashSharp,
} from "react-icons/io5";
import {
  FaAngleDown,
  FaAngleRight,
  FaFolderOpen,
  FaFolder,
  FaSchool,
  FaChild,
} from "react-icons/fa6";
import { IoIosSchool } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import College from "../personal_info/College";
import School from "../personal_info/School";
import Skill from "../personal_info/Skill";
import Bio from "../personal_info/Bio";

function About() {
  const [open, setOpen] = useState("block");
  const [education, setEducation] = useState("block");
  const [skill, setSkill] = useState("block");
  const [bio, setBio] = useState("block");
  const [content, setContent] = useState("skill");
  const [openTabs, setOpenTabs] = useState(["skill"]);

  const folderBtnOnClick = () => {
    setOpen(open === "block" ? "hidden" : "block");
  };

  const educationBtnOnClick = () => {
    setEducation(education === "hidden" ? "block" : "hidden");
  };

  const skillBtnOnClick = () => {
    setSkill(skill === "hidden" ? "block" : "hidden");
  };

  const setBioOnClick = () => {
    setBio(bio === "hidden" ? "block" : "hidden");
  };

  const handleOnClick = (e) => {
    const id = e.target.id;
    setContent(id);
    if (!openTabs.includes(id)) {
      setOpenTabs((prev) => [...prev, id]);
    }
  };

  const handleTabClose = (tab) => {
    setOpenTabs((prevTabs) => {
      const newTabs = prevTabs.filter((t) => t !== tab);
      if (content === tab) {
        setContent(newTabs.length > 0 ? newTabs[newTabs.length - 1] : "");
      }
      return newTabs;
    });
  };

  const getTabTitle = (tab) => {
    switch (tab) {
      case "college":
        return "college.js";
      case "school":
        return "high_school.js";
      case "skill":
        return "my_skill.js";
      case "bio":
        return "my_biography.js";
      default:
        return "";
    }
  };

  return (
    <div className="h-full bg-mutedGreenBlue font-firaCode">
      <div className="flex h-full">
        {/* Sidebar Left */}
        <div className="h-full w-1/4 border-r border-slate-700 flex">
          {/* Icons column */}
          <div className="h-full w-14 border-r border-slate-700 flex flex-col items-center">
            <div className="mt-10 flex flex-col text-2xl gap-8">
              <FaFolderOpen className="cursor-pointer text-lightGreen" />
              <IoTerminal className="cursor-pointer text-darkGreen" />
              <IoGitBranchOutline className="cursor-pointer text-darkGreen" />
            </div>
          </div>

          {/* Folder structure */}
          <div className="w-full">
            <div
              className="border-b border-slate-700 flex items-center justify-start px-5 text-slate-200 cursor-pointer select-none"
              onClick={folderBtnOnClick}
            >
              {open === "block" ? <FaAngleDown /> : <FaAngleRight />}&nbsp;
              personal-info
            </div>

            <div
              className={`${open} flex flex-col p-5 gap-3 text-slate-400 select-none`}
            >
              {/* Education */}
              <div>
                <span
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={educationBtnOnClick}
                >
                  {education === "block" ? <FaAngleDown /> : <FaAngleRight />}
                  {education === "block" ? (
                    <FaFolderOpen className="text-orange-600" />
                  ) : (
                    <FaFolder className="text-orange-600" />
                  )}
                  education
                </span>
                <span
                  className={`${education} ${
                    content === "college" ? "bg-slate-700 text-white" : ""
                  } px-7 py-1 flex items-center gap-2 text-sm font-robotoMono cursor-pointer hover:bg-slate-700 rounded`}
                  onClick={handleOnClick}
                  id="college"
                >
                  <IoIosSchool /> college.js
                </span>
                <span
                  className={`${education} ${
                    content === "school" ? "bg-slate-700 text-white" : ""
                  } px-7 py-1 flex items-center gap-2 text-sm font-robotoMono cursor-pointer hover:bg-slate-700 rounded`}
                  onClick={handleOnClick}
                  id="school"
                >
                  <FaSchool /> high_school.js
                </span>
              </div>

              {/* Skills */}
              <div>
                <span
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={skillBtnOnClick}
                >
                  {skill === "block" ? <FaAngleDown /> : <FaAngleRight />}
                  {skill === "block" ? (
                    <FaFolderOpen className="text-purple-600" />
                  ) : (
                    <FaFolder className="text-purple-600" />
                  )}
                  skills
                </span>
                <span
                  className={`${skill} ${
                    content === "skill" ? "bg-slate-700 text-white" : ""
                  } px-5 py-1 mt-3 flex items-center gap-2 text-sm font-robotoMono cursor-pointer hover:bg-slate-700 rounded`}
                  onClick={handleOnClick}
                  id="skill"
                >
                  <IoCodeSlashSharp /> my_skill.js
                </span>
              </div>

              {/* Bio */}
              <div>
                <span
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={setBioOnClick}
                >
                  {bio === "block" ? <FaAngleDown /> : <FaAngleRight />}
                  {bio === "block" ? (
                    <FaFolderOpen className="text-green-600" />
                  ) : (
                    <FaFolder className="text-green-600" />
                  )}
                  bio
                </span>
                <span
                  className={`${bio} ${
                    content === "bio" ? "bg-slate-700 text-white" : ""
                  } px-7 py-1 flex items-center gap-2 text-sm font-robotoMono cursor-pointer hover:bg-slate-700 rounded`}
                  onClick={handleOnClick}
                  id="bio"
                >
                  <FaChild /> my_biography.js
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="h-full w-full border-r border-slate-700 bg-[#021e20a8] select-none">
          {/* Top Title Bar */}
          <div className="titlebar border-b border-slate-700 h-7 flex text-slate-400">
            {openTabs.map((tab) => (
              <span
                key={tab}
                className={`flex items-center gap-4 border-r border-slate-700 px-5 cursor-pointer ${
                  content === tab ? "text-white bg-slate-800" : "text-slate-400"
                }`}
                onClick={() => setContent(tab)}
              >
                {getTabTitle(tab)}{" "}
                <RxCross2
                  className="hover:text-red-500"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleTabClose(tab);
                  }}
                />
              </span>
            ))}
          </div>

          {/* Content Display */}
          {content === "college" && <College />}
          {content === "school" && <School />}
          {content === "skill" && <Skill />}
          {content === "bio" && <Bio />}
        </div>
      </div>
    </div>
  );
}

export default About;
