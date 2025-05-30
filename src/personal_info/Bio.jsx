import React from "react";

function Bio() {
  return (
    <>
      <div className="w-full h-full text-slate-300 flex flex-col gap-2 p-5 ">
        <div className="flex gap-10">
          <span className="text-slate-600">1</span>
          <span className="text-green-500">/****************************************</span>
        </div>
        <div className="flex gap-10">
          <span className="text-slate-600">2</span>
          <span>
            <span className="text-green-500"> * </span>
            <span className="text-yellow-400">Hello</span>, I'm a 
            <span className="text-cyan-400"> passionate full-stack developer</span>.
          </span>
        </div>
        <div className="flex gap-10">
          <span className="text-slate-600">3</span>
          <span>
            <span className="text-green-500"> * </span>
            I love <span className="text-purple-400">building</span> scalable web applications,
          </span>
        </div>
        <div className="flex gap-10">
          <span className="text-slate-600">4</span>
          <span>
            <span className="text-green-500"> * </span>
            exploring <span className="text-purple-400">new technologies</span>, and solving problems
          </span>
        </div>
        <div className="flex gap-10">
          <span className="text-slate-600">5</span>
          <span>
            <span className="text-green-500"> * </span>
            with <span className="text-blue-400">clean</span> and <span className="text-blue-400">efficient code</span>.
          </span>
        </div>
        <div className="flex gap-10">
          <span className="text-slate-600">6</span>
          <span>
            <span className="text-green-500"> * </span>
            I work with the <span className="text-orange-400">MERN</span> stack, REST APIs,
          </span>
        </div>
        <div className="flex gap-10">
          <span className="text-slate-600">7</span>
          <span>
            <span className="text-green-500"> * </span>
            Git, and <span className="text-pink-400">cloud deployment platforms</span>.
          </span>
        </div>
        <div className="flex gap-10">
          <span className="text-slate-600">8</span>
          <span className="text-green-500"> ****************************************/</span>
        </div>
      </div>
    </>
  );
}

export default Bio;
