import React from "react";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import SkillCard from "./skillCard";

function Skills() {
  return (
    <div className="w-full items-center py-5 md:py-20">
      <div>
      <h1 className="text-4xl pb-10 text-center sm:text-5xl  md:text-6xl lg:text-8xl font-['Neue_Montreal'] tracking-tight">
          Skills
        </h1>
      </div>
      <div className="flex flex-col items-center p-5 md:flex-row justify-center gap-10">
      <SkillCard
        icon={faTerminal}
        title="Software Developer"
        description="Understanding of Core Technologies in Software Engineering: OOP, DSA, C++, DBMS, SQL, Computer Networks. My knowledge in these areas allows me to design and develop efficient, scalable, and secure software solutions, leveraging best practices and industry-standard tools and methodologies."
        color="#03DAC6"
      />
      <SkillCard
        icon={faReact}
        title="Web Developer"
        description="Experience in Web Development: React, JavaScript, HTML, CSS, Tailwind CSS, React Router, React Redux, and I have a solid understanding of the MERN stack, allowing me to build full-stack applications efficiently. I'm passionate about next.js, TypeScript, system design, and DevOps."
        color="#4303da"
      />
      <SkillCard
        icon={faReact}
        title="App Developer"
        description="Understanding of App Development: React Native for Cross-Platform Development. I have a solid understanding of React Native for cross-platform app development. create efficient and high-quality mobile applications that run seamlessly on both iOS and Android devices."
        color="#BB86FC"
      />
      </div>
     
    </div>
  );
}

export default Skills;
