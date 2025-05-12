import React from "react";
import Footer from "./footer";
import { FaGreaterThan } from "react-icons/fa6";
import image from "../assets/react.svg";
function Home() {
  return (
    <>
      <div className="bg-mutedGreenBlue h-screen font-firaCode flex  gap-12">
        <div className="col1 pt-28 pl-56">
          <div>
            <p className="text-slate-300">Hi all. I am</p>
            <h1 className="text-5xl text-slate-200 mt-3">Arghyadep She</h1>
            <span className="flex items-center text-3xl mt-5 text-Blue">
              <FaGreaterThan /> <p className="mx-3">Full-Stack Developer...</p>
              <p className="animate-bounce">|</p>
            </span>
          </div>
          <div>
            <p className="text-slate-500">// my number</p>
            <span className="flex">
              <p className="text-Blue">const</p>&nbsp;
              <p className="text-lightGreen">telephoneNum</p>&nbsp;
              <p className="text-white">= +91 8207084203;</p>
            </span>
            <p className="text-slate-500">// my e-mail id</p>
            <span className="flex">
              <p className="text-Blue">const</p>&nbsp;
              <p className="text-lightGreen">emailId</p>&nbsp;
              <p className="text-white">=</p>&nbsp;
              <p className="text-Orange"> "arghyadeepshee00@gmail.com";</p>{" "}
            </span>
            <p className="text-slate-500">
              // you can also see it on my Github page
            </p>
            <span className="flex">
              <p className="text-Blue">const</p>&nbsp;
              <p className="text-lightGreen">gitHubLink</p>&nbsp;
              <p className="text-white">=</p>&nbsp;
              <p className="text-Orange">
                {" "}
                "https://github.com/arghya00";
              </p>{" "}
            </span>
            <p className="text-slate-500">// you can see my post on Linkedin</p>
            <span className="flex">
              <p className="text-Blue">const</p>&nbsp;
              <p className="text-lightGreen">linkedinPage</p>&nbsp;{" "}
              <p className="text-white">=</p>&nbsp;
              <p className="text-Orange">
                "https://www.linkedin.com/arghya00";
              </p>{" "}
            </span>
            <p className="text-slate-500">// also follo on X handle</p>
            <span className="flex">
              <p className="text-Blue">const</p>&nbsp;
              <p className="text-lightGreen">xhandle</p>&nbsp;
              <p className="text-white">=</p>&nbsp;
              <p className="text-Orange"> "https://x.com/arghyadeep00"</p>
            </span>
          </div>
        </div>
        <div className="col2 flex flex-col justify-center items-center w-full select-none">
          <img
            src={image}
            className="animate-spin"
            style={{ animationDuration: "20s" }}
            width={350}
          />
        </div>
      </div>
     
    </>
  );
}

export default Home;
