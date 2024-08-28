import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import LocomotiveScroll from 'locomotive-scroll';

export const Navbar = () => {
  const scrollToHero = () => {
    const locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
    });

    locomotiveScroll.scrollTo('#hero', {
      duration: 500, // Time in milliseconds
      offset: 0,     // Adjust if necessary
    });
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
      className='flex z-[999] top-0 fixed w-full justify-between py-1 px-5 md:px-10
                 bg-[#fff]/10 backdrop-blur-md backdrop-saturate-150 shadow-lg'
    >
      <svg
        className='cursor-pointer'
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 180 100"
        width="80"
        height="50"
        onClick={scrollToHero}
      >
        <path d="M10 75 L25 25 L40 75 Z M17.5 55 L32.5 55" fill="black" />
        <path d="M50 75 L50 25 L80 25 L80 75 Z M65 25 L65 75" fill="black" />
        <path d="M90 75 L105 25 L120 75 Z M97.5 55 L112.5 55" fill="black" />
        <path d="M130 75 L130 25 L160 25 L160 75 Z M145 25 L145 75" fill="black" />
      </svg>

      <div className='flex w-full justify-end text-2xl md:text-3xl gap-10'>
        <a href="https://github.com/ataaman" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FontAwesomeIcon className='pt-2 text-black hover:text-gray-700 transition' icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/md-aman-ata-b9bb361bb/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FontAwesomeIcon className='pt-2 text-blue-700 hover:text-blue-500 transition' icon={faLinkedin} />
        </a>
        <a href="https://twitter.com/code_aman1" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FontAwesomeIcon className='pt-2 text-black hover:text-gray-700 transition' icon={faTwitter} />
        </a>
        <a href="https://instagram.com/ig_amanata" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FontAwesomeIcon className='pt-2 text-red-700 hover:text-red-500 transition' icon={faInstagram} />
        </a>
      </div>
    </motion.div>
  );
};
