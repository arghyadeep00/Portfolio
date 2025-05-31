import React from "react";
import { FaGreaterThan } from "react-icons/fa6";
import image from "../assets/react.svg";

function Home() {
  return (
    <>
      <div className="bg-mutedGreenBlue min-h-full font-firaCode flex flex-col lg:flex-row gap-12 px-6 lg:px-24 py-10">
        {/* Left Column */}
        <div className="lg:w-1/2 w-full flex flex-col justify-center">
          <div>
            <p className="text-slate-300 text-base sm:text-lg">Hi all. I am</p>
            <h1 className="text-4xl sm:text-5xl text-slate-200 mt-3">Arghyadep She</h1>
            <span className="flex items-center text-2xl sm:text-3xl mt-5 text-Blue">
              <FaGreaterThan /> <p className="mx-2 sm:mx-3">Full-Stack Developer...</p>
              <p className="animate-bounce">|</p>
            </span>
          </div>

          <div className="mt-6 text-sm sm:text-base">
            <p className="text-slate-500">// my number</p>
            <span className="flex flex-wrap">
              <p className="text-Blue">const</p>&nbsp;
              <p className="text-lightGreen">telephoneNum</p>&nbsp;
              <p className="text-white">= +91 8207084203;</p>
            </span>

            <p className="text-slate-500 mt-2">// my e-mail id</p>
            <span className="flex flex-wrap">
              <p className="text-Blue">const</p>&nbsp;
              <p className="text-lightGreen">emailId</p>&nbsp;
              <p className="text-white">=</p>&nbsp;
              <p className="text-Orange">"arghyadeepshee00@gmail.com";</p>
            </span>

            <p className="text-slate-500 mt-2">// you can also see it on my Github page</p>
            <span className="flex flex-wrap">
              <p className="text-Blue">const</p>&nbsp;
              <p className="text-lightGreen">gitHubLink</p>&nbsp;
              <p className="text-white">=</p>&nbsp;
              <p className="text-Orange">"https://github.com/arghya00";</p>
            </span>

            <p className="text-slate-500 mt-2">// you can see my post on Linkedin</p>
            <span className="flex flex-wrap">
              <p className="text-Blue">const</p>&nbsp;
              <p className="text-lightGreen">linkedinPage</p>&nbsp;
              <p className="text-white">=</p>&nbsp;
              <p className="text-Orange">"https://www.linkedin.com/arghya00";</p>
            </span>

            <p className="text-slate-500 mt-2">// also follow on X handle</p>
            <span className="flex flex-wrap">
              <p className="text-Blue">const</p>&nbsp;
              <p className="text-lightGreen">xhandle</p>&nbsp;
              <p className="text-white">=</p>&nbsp;
              <p className="text-Orange">"https://x.com/arghyadeep00"</p>
            </span>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/2 w-full flex justify-center items-center">
          <img
            src={image}
            className="animate-spin"
            style={{ animationDuration: "20s" }}
            width={250}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
