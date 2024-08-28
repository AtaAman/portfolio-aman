import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".01"
      className="w-full pb-28 pt-28  rounded-t-xl  bg-[#03DAC6]"
    >
      <div className="border-t-2 border-b-2 flex items-center overflow-hidden whitespace-nowrap text-[#121212] border-gray-900">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat:Infinity, ease: "linear", duration: 5 }}
          className='font-extrabold text-[20vw] pr-10 leading-none font-["Test_Founders_Grotesk_X"]'
        >
          FRONTEND DEVELOPER
        </motion.h1>
        <motion.h1
                    initial={{ x: "0" }}
                    animate={{ x: "-110%" }}
                    transition={{ repeat:Infinity, ease: "linear", duration: 5 }}
          className='font-extrabold text-[20vw] pr-10 leading-none font-["Test_Founders_Grotesk_X"]'
        >
          REACT DEVELOPER
        </motion.h1>
      </div>
    </div>
  );
}

export default About;
