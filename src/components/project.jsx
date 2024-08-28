import { motion, useAnimation } from "framer-motion";
import vtube from "../../public/images/projects/vtube.png";
import currencyconverter from "../../public/images/projects/currencyconverter.png";
import carCare from "../../public/images/projects/carCare.png";
import taqwa from "../../public/images/projects/taqwa.png";
import project3 from "../../public/images/projects/project.jpg";

function Projects() {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-20">
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-20 border-b-[1px] pb-10 border-zinc-700">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-['Neue_Montreal'] tracking-tight">
          Featured Projects
        </h1>
      </div>
      <div className="px-4 sm:px-8 md:px-16 lg:px-20">
        <div className="flex flex-col md:flex-row gap-10 mt-20 mb-20">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="relative w-full md:w-1/2 h-[60vh] md:h-[75vh]"
          >
            <div className="flex gap-10">
              <li className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2">VTUBE</li>
              <a className="text-md lg:text-xl md:text-xl md:pt-2" href="https://vtube-gamma.vercel.app/" target="_blank" rel="noopener noreferrer">LIVE</a>
              <a className="text-md lg:text-xl md:text-xl md:pt-2" href="https://github.com/AtaAman/vtube" target="_blank" rel="noopener noreferrer">GITHUB</a>
            </div>
            <h1 className="absolute text-[#CDEA68] flex overflow-hidden z-[9] translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tighter right-0 text-6xl sm:text-7xl md:text-8xl">
              {"vtube".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 2, 0.36, 1], delay: index * 0.01 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div
              className="w-full h-full rounded-xl bg-slate-700 overflow-hidden"
              whileHover={{ scale: 0.97 }}
              transition={{ ease: "easeInOut", duration: 0.2 }}
            >
              <motion.img
                className="w-full h-full object-contain"
                whileHover={{ scale: 1.12 }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
                src={vtube}
                alt="VTUBE"
              />
            </motion.div>
          </motion.div>

          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="relative w-full md:w-1/2 h-[60vh] md:h-[75vh]"
          >
            <div className="flex gap-10">
              <li className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2">CarCare</li>
              <a className="text-md lg:text-xl md:text-xl md:pt-2 " href="https://carandcarewithus.netlify.app/" target="_blank" rel="noopener noreferrer">LIVE</a>
              <a className="text-md lg:text-xl md:text-xl md:pt-2 " href="https://github.com/AtaAmanhttps://github.com/AtaAman/car-care" target="_blank" rel="noopener noreferrer">GITHUB</a>
            </div>
            <h1 className="absolute text-[#CDEA68] flex overflow-hidden z-[9] -translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tighter left-0 text-6xl sm:text-7xl md:text-8xl">
              {"CarCare".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 2, 0.36, 1], delay: index * 0.01 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div
              className="w-full h-full rounded-xl bg-slate-300 overflow-hidden"
              whileHover={{ scale: 0.97 }}
              transition={{ ease: "easeInOut", duration: 0.3 }}
            >
              <motion.img
                className="w-full h-full object-contain"
                whileHover={{ scale: 1.12 }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
                src={carCare}
                alt="CarCare"
              />
            </motion.div>
          </motion.div>
          
        </div>

        <div className="flex flex-col md:flex-row gap-10 mt-20 mb-20">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="relative w-full md:w-1/2 h-[60vh] md:h-[75vh]"
          >
            <div className="flex gap-10">
              <li className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2">SOCIAL MEDIA</li>
              <a className="text-md lg:text-xl md:text-xl md:pt-2" href="https://al-taqwa.vercel.app/" target="_blank" rel="noopener noreferrer">LIVE</a>
              <a className="text-md lg:text-xl md:text-xl md:pt-2" href="https://github.com/AtaAman/taqwa" target="_blank" rel="noopener noreferrer">GITHUB</a>
            </div>
            <h1 className="absolute text-[#CDEA68] flex overflow-hidden z-[9] translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tighter right-0 text-6xl sm:text-7xl md:text-8xl">
              {"Social Media".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 2, 0.36, 1], delay: index * 0.01 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div
              className="w-full h-full rounded-xl bg-slate-300 overflow-hidden"
              whileHover={{ scale: 0.97 }}
              transition={{ ease: "easeInOut", duration: 0.2 }}
            >
              <motion.img
                className="w-full h-full object-contain"
                whileHover={{ scale: 1.12 }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
                src={taqwa}
                alt="SOCIAL MEDIA"
              />
            </motion.div>
          </motion.div>

          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="relative w-full md:w-1/2 h-[60vh] md:h-[75vh]"
          >
            <div className="flex gap-10">
              <li className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2">CURRENCY</li>
              <a className="text-md lg:text-xl md:text-xl md:pt-2 " href="https://charming-jalebi-a45d12.netlify.app/" target="_blank" rel="noopener noreferrer">LIVE</a>
              <a className="text-md lg:text-xl md:text-xl md:pt-2 " href="https://github.com/AtaAman/currencyConvertor" target="_blank" rel="noopener noreferrer">GITHUB</a>
            </div>
            <h1 className="absolute text-[#CDEA68] flex overflow-hidden z-[9] -translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tighter left-0 text-6xl sm:text-7xl md:text-8xl">
              {"Currency converter".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 2, 0.36, 1], delay: index * 0.01 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div
              className="w-full h-full rounded-xl bg-slate-800 overflow-hidden"
              whileHover={{ scale: 0.97 }}
              transition={{ ease: "easeInOut", duration: 0.3 }}
            >
              <motion.img
                className="w-full h-full object-contain"
                whileHover={{ scale: 1.12 }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
                src={currencyconverter}
                alt="currencyconverter"
              />
            </motion.div>
          </motion.div>
          
        </div>

        <div className="flex flex-col md:flex-row gap-10 mt-20 mb-20">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="relative w-full md:w-1/2 h-[60vh] md:h-[75vh]"
          >
            <div className="flex gap-10">
              <li className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2">PAYTM</li>
              <a className="text-md lg:text-xl md:text-xl md:pt-2" href="https://github.com/AtaAman/" target="_blank" rel="noopener noreferrer">LIVE</a>
              <a className="text-md lg:text-xl md:text-xl md:pt-2" href="https://github.com/AtaAman/" target="_blank" rel="noopener noreferrer">GITHUB</a>
            </div>
            <h1 className="absolute text-[#CDEA68] flex overflow-hidden z-[9] translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tighter right-0 text-6xl sm:text-7xl md:text-8xl">
              {"PAYTM".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 2, 0.36, 1], delay: index * 0.01 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div
              className="w-full h-full rounded-xl bg-slate-700 overflow-hidden"
              whileHover={{ scale: 0.97 }}
              transition={{ ease: "easeInOut", duration: 0.2 }}
            >
              <motion.img
                className="w-full h-full object-contain"
                whileHover={{ scale: 1.12 }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
                src={project3}
                alt="PAYTM"
              />
            </motion.div>
          </motion.div>

          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="relative w-full md:w-1/2 h-[60vh] md:h-[75vh]"
          >
            <div className="flex gap-10">
              <li className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2">PODCAST</li>
              <a className="text-md lg:text-xl md:text-xl md:pt-2 " href="https://github.com/AtaAman" target="_blank" rel="noopener noreferrer">LIVE</a>
              <a className="text-md lg:text-xl md:text-xl md:pt-2 " href="https://github.com/AtaAman" target="_blank" rel="noopener noreferrer">GITHUB</a>
            </div>
            <h1 className="absolute text-[#CDEA68] flex overflow-hidden z-[9] -translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tighter left-0 text-6xl sm:text-7xl md:text-8xl">
              {"Podcast".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 2, 0.36, 1], delay: index * 0.01 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div
              className="w-full h-full rounded-xl bg-slate-300 overflow-hidden"
              whileHover={{ scale: 0.97 }}
              transition={{ ease: "easeInOut", duration: 0.3 }}
            >
              <motion.img
                className="w-full h-full object-contain"
                whileHover={{ scale: 1.12 }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
                src={project3}
                alt="PODCAST"
              />
            </motion.div>
          </motion.div>
          
        </div>

        
        
        {/* Add more project blocks similarly */}
      </div>
    </div>
  );
}

export default Projects;
