import React, { useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import { FaFolder, FaFolderOpen } from "react-icons/fa";
import projects from "../data/projects";
import { FaGithub } from "react-icons/fa";
import { IoMdLink } from "react-icons/io";
function ProjectShowcase() {
  const [expanded, setExpanded] = useState(true);
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <div className="h-full w-full flex bg-[#021e20] font-mono text-slate-300">
      {/* Sidebar */}
      <div className="w-1/4 border-r border-slate-700">
        <div
          className="flex items-center gap-2 px-4 py-2 border-b border-slate-700 cursor-pointer text-slate-200"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? <FaAngleDown /> : <FaAngleRight />}
          <span>projects</span>
        </div>
        {expanded && (
          <div className="p-4 space-y-2">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`flex items-center gap-2 cursor-pointer px-2 py-1 rounded ${
                  selectedProject.id === project.id
                    ? "bg-slate-700 text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <FaFolderOpen className="text-orange-500" />
                {project.filename}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Main content */}
      <div className="w-3/4 p-4 overflow-y-auto">
        <div className="text-lg font-semibold text-green-400 mb-2">
          {selectedProject.title}
        </div>
        <div className="flex gap-5">
          <img
            src={selectedProject.screenshot}
            alt={selectedProject.title}
            className="w-full max-w-xl rounded-lg shadow-md mb-4 border border-slate-600"
          />
          <div>{selectedProject.description}</div>
        </div>
        <div className="flex gap-6">
          <a
            href={selectedProject.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            <span className="flex items-center gap-2">
              <IoMdLink />
              Live Preview
            </span>
          </a>
          <a
            href={selectedProject.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            <span className="flex items-center gap-2">
              <FaGithub /> Source Code
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectShowcase;
