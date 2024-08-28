import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SkillCard({ icon, title, description, color }) {
  return (
    <div className="h-[500px] p-12 w-[350px] flex flex-col gap-10 text-white hover:text-zinc-300 md:h-[450px] md:w-[450px] border-black bg-[#252525] border-2 rounded-xl hover:bg-[#000000]">
      <div className="flex gap-5 items-center">
        <FontAwesomeIcon className="h-14" icon={icon} />
        <h1 className={`text-[25px] md:text-[35px] font-["Test_Founders_Grotesk_X"] font-bold`} style={{ color }}>
          {title}
        </h1>
      </div>
      <p className='font-["Neue_Montreal"] text-lg md:text-xl text-justify'>
        {description}
      </p>
    </div>
  );
}

export default SkillCard;
