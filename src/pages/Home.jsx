import React from "react";
import profileImg from "/photo.png";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";

const techIcons = [
  { icon: <FaReact className="text-cyan-400" />, name: "React" },
  { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
  { icon: <FaGithub className="text-white" />, name: "GitHub" },
  { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5" },
  { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3" },
  { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
];

const Home = () => {
  return (
    <section className="min-h-full bg-mutedGreenBlue flex flex-col lg:flex-row items-center justify-between px-6 lg:px-24 py-12 font-firaCode">
      {/* Left: Intro Text */}
      <div className="lg:w-1/2 w-full mb-12 lg:mb-0">
        <p className="text-slate-300 text-lg">Hi all. I am</p>
        <h1 className="text-4xl sm:text-5xl text-slate-200 mt-3 font-bold">
          Arghyadep She
        </h1>
        <p className="text-2xl sm:text-3xl mt-5 text-Blue flex items-center">
          <span className="mr-2">&gt;</span> Full-Stack Developer...
          <span className="animate-bounce ml-2">|</span>
        </p>

        <div className="mt-6 text-sm sm:text-base text-white space-y-2">
          <p className="text-slate-500">// Contact Details</p>
          <p>
            <span className="text-Blue">const</span>{" "}
            <span className="text-lightGreen">telephoneNum</span> = +91
            8207084203;
          </p>
          <p>
            <span className="text-Blue">const</span>{" "}
            <span className="text-lightGreen">emailId</span> ={" "}
            <span className="text-Orange">"arghyadeepshee00@gmail.com"</span>;
          </p>
          <p>
            <span className="text-Blue">const</span>{" "}
            <span className="text-lightGreen">gitHubLink</span> ={" "}
            <span className="text-Orange">"https://github.com/arghya00"</span>;
          </p>
          <p>
            <span className="text-Blue">const</span>{" "}
            <span className="text-lightGreen">linkedinPage</span> ={" "}
            <span className="text-Orange">
              "https://www.linkedin.com/arghya00"
            </span>
            ;
          </p>
          <p>
            <span className="text-Blue">const</span>{" "}
            <span className="text-lightGreen">xhandle</span> ={" "}
            <span className="text-Orange">"https://x.com/arghyadeep00"</span>
          </p>
        </div>

        <a
          href="/resume.pdf"
          download
          className="inline-block mt-6 border border-lightGreen text-lightGreen px-5 py-2 rounded-md font-semibold hover:bg-lightGreen hover:text-black transition"
        >
          Download Resume
        </a>
      </div>

      {/* Right: Profile Image with Orbiting Icons */}
      <div className="lg:w-1/2 w-full flex justify-center items-center">
        <div className="relative w-72 h-72 flex items-center justify-center">
          {/* Profile Image */}
          <img
            src={profileImg}
            alt="Profile"
            className="rounded-full border-4 border-lightGreen shadow-lg w-60 h-60 object-cover z-10"
          />

          {/* Orbiting Tech Icons */}
          <ul className="absolute inset-0 animate-spin-slow">
            {techIcons.map((item, index) => {
              const angle = (360 / techIcons.length) * index;
              const radius = 190; // increased from 130
              const x = radius * Math.cos((angle * Math.PI) / 180);
              const y = radius * Math.sin((angle * Math.PI) / 180);

              return (
                <li
                  key={index}
                  style={{ transform: `translate(${x}px, ${y}px)` }}
                  className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition hover:scale-110"
                  title={item.name}
                >
                  <span className="text-3xl text-white drop-shadow">
                    {item.icon}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Home;
