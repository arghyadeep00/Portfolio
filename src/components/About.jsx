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
function About() {
  const [open, setOpen] = useState("block");
  const folderBtnOnClick = () => {
    open == "block" ? setOpen("hidden") : setOpen("block");
  };
  const [education, setEducation] = useState("hidden");
  const educationBtnOnClick = () => {
    education == "hidden" ? setEducation("block") : setEducation("hidden");
  };
  const [skill, setSkill] = useState("block");
  const skillBtnOnClick = () => {
    skill == "hidden" ? setSkill("block") : setSkill("hidden");
  };
  const [bio, setBio] = useState("hidden");
  const setBioOnClick = () => {
    bio == "hidden" ? setBio("block") : setBio("hidden");
  };
  const [content, setContent] = useState("skill");
  const handleOnClick = (e) => {
    setContent(e.target.id);
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
            {/* folder section  */}
            <div className="w-full">
              <div
                className="border-b border-slate-700 flex items-center justify-start px-5 text-slate-200 cursor-pointer select-none"
                onClick={folderBtnOnClick}
              >
                {open == "block" ? <FaAngleDown /> : <FaAngleRight />}&nbsp;
                personal-info
              </div>
              <div
                className={`${open} flex flex-col p-5 gap-3  text-slate-400 select-none`}
              >
                {/* education folder open close */}
                <div className="education-section">
                  <span
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={educationBtnOnClick}
                  >
                    {education == "block" ? <FaAngleDown /> : <FaAngleRight />}
                    {education == "block" ? (
                      <FaFolderOpen className="text-orange-600" />
                    ) : (
                      <FaFolder className="text-orange-600" />
                    )}
                    education
                  </span>
                  <span
                    className={`${education} px-7 py-1 flex items-center gap-2 text-sm font-robotoMono cursor-pointer`}
                    onClick={handleOnClick}
                    id="college"
                  >
                    <IoIosSchool />
                    college.js
                  </span>
                  <span
                    className={`${education} px-7 py-1 flex items-center gap-2 text-sm font-robotoMono cursor-pointer`}
                    onClick={handleOnClick}
                    id="school"
                  >
                    <FaSchool />
                    high_school.js
                  </span>
                </div>
                {/* skill folder open close */}
                <div className="skill-section">
                  <span
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={skillBtnOnClick}
                  >
                    {skill == "block" ? <FaAngleDown /> : <FaAngleRight />}
                    {skill == "block" ? (
                      <FaFolderOpen className="text-purple-600" />
                    ) : (
                      <FaFolder className="text-purple-600" />
                    )}
                    skills
                  </span>
                  <span
                    className={`${skill} px-7 py-2 flex items-center gap-2 text-sm font-robotoMono cursor-pointer`}
                    onClick={handleOnClick}
                    id="skill"
                  >
                    <IoCodeSlashSharp />
                    my_skill.js
                  </span>
                </div>
                {/* bio folder open close  */}
                <div className="bio-section">
                  <span
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={setBioOnClick}
                  >
                    {bio == "block" ? <FaAngleDown /> : <FaAngleRight />}{" "}
                    {bio == "block" ? (
                      <FaFolderOpen className="text-green-600" />
                    ) : (
                      <FaFolder className="text-green-600" />
                    )}{" "}
                    bio
                  </span>
                  <span
                    className={`${bio} px-7 py-2 flex items-center gap-2 text-sm font-robotoMono cursor-pointer`}
                    onClick={handleOnClick}
                    id="bio"
                  >
                    <FaChild /> my_biography.js
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* content title bar section  */}
          <div className="h-full w-full border-r border-slate-700 bg-[#021e20a8] select-none">
            <div className="titlebar border-b border-slate-700 h-7 flex text-slate-400">
              {content == "college" ? (
                <span className="flex items-center gap-4 border-r border-slate-700 px-5 cursor-pointer text-white">
                  college.js <RxCross2 />
                </span>
              ) : (
                ""
              )}
              {content == "school" ? (
                <span className="flex items-center gap-4 border-r border-slate-700 px-5 cursor-pointer text-white">
                  high_school.js <RxCross2 />
                </span>
              ) : (
                ""
              )}
              {content == "skill" ? (
                <span className="flex items-center gap-4 border-r border-slate-700 px-5 cursor-pointer text-white">
                  my_skills.js <RxCross2 />
                </span>
              ) : (
                ""
              )}
              {content == "bio" ? (
                <span className="flex items-center gap-4 border-r border-slate-700 px-5 cursor-pointer text-white">
                  bio.js <RxCross2 />
                </span>
              ) : (
                ""
              )}
              {/* <span className={`flex items-center gap-4 border-r px-5 cursor-pointer `}>
                college <RxCross2 />
              </span>
              <span className="flex items-center gap-4 border-r px-5 cursor-pointer">
                High-school <RxCross2 />
              </span>
              <span className="flex items-center gap-4 border-r px-5 cursor-pointer">
                my-skills <RxCross2 />
              </span> */}
            </div>
            {/* content preview section  */}
            {content == "school" ? <School /> : ""}
            {content == "college" ? <College /> : ""}
            {content == "skill" ? <Skill /> : ""}
            {content == "bio" ? <Bio /> : ""}
          </div>
        </div>
      </div>

    </>
  );
}

export default About;
