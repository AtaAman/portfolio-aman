import React from "react";
import img from "../assets/aman.png";
import resume from "../assets/resume.pdf"

export const Abouts = () => {
  return (
    <div className="w-full  py-0 md:py-20 px-5 rounded-t-xl  text-zinc-900 bg-white">
      <div className="flex flex-col  md:flex-row">
        <div className="p-10 flex-1 justify-between">
          <h1 className="font-extrabold text-[10vw] font-['Test_Founders_Grotesk_X']">
            about.
          </h1>
          <p className="font-['Neue_Montreal'] text-justify text-md md:text-xl lg:text-2xl">
            I am a Software Development Engineer proficient in JavaScript, MERN
            stack, and React Native and SQL. I'm passionate about next.js,
            TypeScript, system design, and DevOps. Committed to staying ahead in
            tech, I ensure seamless and dynamic digital experiences for every
            project.
          </p>
          <div className="flex justify-center gap-10 my-5 md:my-10">
          <a
              href={resume}
              download="Aman_Ata_Resume.pdf"
              className="bg-[#04a796] hover:bg-[#07e9d2] px-4 py-2 md:px-8 md:py-3 text-lg md:text-xl rounded-3xl"
            >
              Resume
            </a>
            <a
              href="mailto:mdamanata8@gmail.com"
              className="bg-[#121212] hover:bg-[#5c5c5c] text-white px-4 py-2 md:px-8 md:py-3 text-lg md:text-xl rounded-3xl"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="flex-1 py-0 md:py-10 p-14 items-center">
          <img
            className="ml-0 pl-10 lg:ml-28 w-96"
            src={img}
            alt="About Aman Ata"
          />
        </div>
      </div>
    </div>
  );
};
