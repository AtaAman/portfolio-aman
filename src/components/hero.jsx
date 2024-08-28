import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocketchat } from '@fortawesome/free-brands-svg-icons';

function Hero() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.6" className="w-full h-screen pt-1">
      <div className="flex flex-col md:flex-row">
        <div className='p-8 mt-32 font-extrabold text-[6vw] font-["Test_Founders_Grotesk_X"] leading-[4.5vh] md:leading-[7.5vh] lg:leading-[12vh]'>
          {["I'M AMAN ATA", "DEVELOPEMENT ", "ENGINEER"].map((item, index) => {
            return (
              <div key={index}>
                <div className="flex items-center">
                  {index === 1 && (
                    <motion.div
                      initial={{ x: -100, width: 0, opacity: 0 }}
                      animate={{ x: 0, width: "auto", opacity: 1 }}
                      transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.2 }}
                      className="relative text-[#00a393] whitespace-nowrap"
                    >
                      SOFTWARE
                    </motion.div>
                  )}
                  <motion.h1
                    className={index === 1 ? "ml-2" : ""}
                  >
                    {item}
                  </motion.h1>
                </div>
              </div>
            );
          })}
        </div>

        <motion.img
          className="bg-black opacity-75 p-6 rounded-lg md:mt-28 w-full md:w-auto"
          src="https://tamalsen.dev/wp-content/uploads/2021/12/hello-world-html-code-768x384.png"
          alt="Coding"
        />
      </div>
      <motion.div
        initial={{ y: 200 }}
        animate={{ y: 0 }}
        transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
        className="border-t-[1px] py-2 font-['Neue_Montreal'] md:flex text-center px-10 justify-between border-zinc-500 mt-5 md:mt-32"
      >
        <p>2024 © All Rights Reserved.</p>
        <p>Built by Aman</p>
        <a href="https://www.linkedin.com/in/md-aman-ata-b9bb361bb/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <p className="border-2 cursor-pointer rounded-2xl border-gray-300 hover:border-gray-900 px-2">Say Hello <span><FontAwesomeIcon icon={faRocketchat} /></span></p>
        </a>
      </motion.div>
    </div>
  );
}

export default Hero;
