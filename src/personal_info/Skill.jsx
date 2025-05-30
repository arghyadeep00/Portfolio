import React from "react";
import { Github } from "lucide-react";

function Skill() {
  return (
    <div className="w-full h-[80vh] text-slate-300 flex flex-col gap-2 p-5 overflow-y-scroll">
      {/* Header */}
      <div className="flex gap-10">
        <span className="text-slate-500">1</span>
        <span className="text-green-500 transition-all duration-300 hover:text-green-400">
          /****************************************
        </span>
      </div>
      <div className="flex gap-10">
        <span className="text-slate-500">2</span>
        <span className="text-blue-400 transition-all duration-300 hover:text-blue-300">
          * [Hello World]
        </span>
      </div>
      <div className="flex gap-10">
        <span className="text-slate-500">3</span>
        <span className="text-pink-400 transition-all duration-300 hover:text-pink-300">
          * My programming skills are listed below:
        </span>
      </div>

      {/* Frontend */}
      <div className="flex gap-10 mt-3">
        <span className="text-slate-500">4</span>
        <span className="text-emerald-400">* ===== Frontend =====</span>
      </div>
      {[
        ["HTML", "70%"],
        ["CSS", "40%"],
        ["JavaScript", "70%"],
        ["Bootstrap", "40%"],
        ["Tailwind CSS", "60%"],
        ["React JS", "70%"],
      ].map(([tech, percent], idx) => (
        <div className="flex gap-10 group" key={tech}>
          <span className="text-slate-500">{5 + idx}</span>
          <span className="transition-all duration-200 group-hover:text-white">
            * {tech.padEnd(20, ".")}{" "}
            <span className="text-yellow-400">{percent}</span>
          </span>
        </div>
      ))}

      {/* Backend */}
      <div className="flex gap-10 mt-3">
        <span className="text-slate-500">11</span>
        <span className="text-emerald-400">* ===== Backend =====</span>
      </div>
      {[
        ["Node.js", "70%"],
        ["Express.js", "70%"],
        ["MongoDB", "80%"],
      ].map(([tech, percent], idx) => (
        <div className="flex gap-10 group" key={tech}>
          <span className="text-slate-500">{12 + idx}</span>
          <span className="transition-all duration-200 group-hover:text-white">
            * {tech.padEnd(20, ".")}{" "}
            <span className="text-yellow-400">{percent}</span>
          </span>
        </div>
      ))}

      {/* Others */}
      <div className="flex gap-10 mt-3">
        <span className="text-slate-500">15</span>
        <span className="text-emerald-400">* ===== Tools & Others =====</span>
      </div>
      {[
        ["Git & GitHub", "75%"],
        ["VS Code", "85%"],
        ["Postman", "70%"],
        ["ChatGPT", "90%"],
      ].map(([tool, percent, link], idx) => (
        <div className="flex gap-10 group" key={tool}>
          <span className="text-slate-500">{16 + idx}</span>
          <span className="flex items-center gap-2 transition-all duration-300 group-hover:text-white">
            * {tool.padEnd(20, ".")}
            <span className="text-yellow-400">{percent}</span>
          </span>
        </div>
      ))}

      {/* Footer */}
      <div className="flex gap-10 mt-3">
        <span className="text-slate-500">20</span>
        <span className="text-green-500 transition-all duration-300 hover:text-green-400">
          ****************************************/
        </span>
      </div>
    </div>
  );
}

export default Skill;
