import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faRocketchat,
  faLinkedin,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
<div className="bg-[#121212] text-white">    <div className="w-full flex py-28 justify-around flex-col md:flex-row">
      <div className="p-10 gap-10 text-center">
        <h1 className="font-extrabold text-[55px] md:text-[80px]font-['Test_Founders_Grotesk_X']">contact.</h1>
        <p className="font-['Neue_Montreal'] text-gray-500 text-lg md:text-xl">Get in touch with me via social media or email</p>
        <div className="flex items-center mt-5 text-3xl md:text-5xl justify-center gap-10">
        <a href="https://github.com/ataaman" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FontAwesomeIcon className='pt-2 text-white hover:text-gray-700 transition' icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/md-aman-ata-b9bb361bb/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FontAwesomeIcon className='pt-2 text-blue-700 hover:text-blue-500 transition' icon={faLinkedin} />
        </a>
        <a href="https://twitter.com/code_aman1" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FontAwesomeIcon className='pt-2 text-white hover:text-gray-700 transition' icon={faTwitter} />
        </a>
        <a href="https://instagram.com/ig_amanata" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FontAwesomeIcon className='pt-2 text-red-700 hover:text-red-500 transition' icon={faInstagram} />
        </a>
        </div>
      </div>
      <div className="p-10 w-full md:w-[50%] gap-5 flex flex-col items-center text-center">
        <h1 className="font-extrabold text-[25px] md:text-[40px] font-['Test_Founders_Grotesk_X']">Available for working fulltime and freelance opportunities</h1>
        <p className="font-['Neue_Montreal'] text-gray-500 text-lg md:text-xl">Have an exiting project you need help with? or loocking for an engineer to hire?</p>
        <p className="font-['Neue_Montreal'] text-gray-500 text-lg md:text-xl">send me an email or contact me via instant message!</p>
      </div>
      
    </div>
    <div
    className="border-t-[1px] py-5 md:py-10 font-['Neue_Montreal'] md:flex text-center px-10 justify-between border-zinc-500">
      <p>2024 © All Rights Reserved.</p>
      <p>Built by Aman</p>
      <a href="https://www.linkedin.com/in/md-aman-ata-b9bb361bb/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
      <p className="border-2 cursor-pointer rounded-2xl border-gray-300 hover:border-gray-900 px-2">Say Hello <span><FontAwesomeIcon icon={faRocketchat} /></span></p>
        </a>
      
    </div> </div>
  );
}

export default Footer;
